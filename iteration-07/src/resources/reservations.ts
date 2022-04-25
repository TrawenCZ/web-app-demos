import { Request, Response } from 'express';
import { object, date, string, number, ValidationError } from 'yup';
import prisma from '../client';

/**
 * Reservation schema
 */
const reservationSchema = object({
  from : date().required(),
  to : date().required(),
  guestCount : number().min(1).required(),
  accommodationId : string().required(),
  userId: string().required()
});

export const pay = async (req: Request, res: Response) => {
    const reservation = await prisma.reservations.update({
      data : {
        isPaid : true
      },
      where: {
        id: req.params.id
      }
    })

    if (!reservation) {
      return res.status(404).send({
        status: "error",
        data: {},
        message: "Object not found"
      });
    }

    return res.status(200).send({
      status: "success",
      data: reservation,
      message: "Reservation paid"
    })
}

/**
 * Store new reservation
 */
export const make = async (req: Request, res: Response) => {
  try {
    const data = await reservationSchema.validate(req.body);
    if (data.from >= data.to) {
      return res.status(400).send({
        status: "error",
        data: {},
        message: "'from' argument must be before 'to' argument"
      });
    }
    if (data.from < new Date()) {
      return res.status(400).send({
        status: "error",
        data: {},
        message: "Reservation must be in future"
      });
    }

    const user = await prisma.user.findUnique({
      where : {
        id : data.userId
      }
    })

    if (!user) {
      return res.status(400).send({
        status: "error",
        data: {},
        message: "User does not exist"
      });
    }

    const reservation = await prisma.reservations.findFirst({
      where : {
        accomodationId : data.accommodationId,
        isPaid: true,
        OR : [
            {
            from : {
              gte : data.from,
              lte : data.to
            },
          },
          {
            to : {
              lte : data.to,
              gte : data.from
          }
          },
          {
            from: {
              lte: data.from
            },
            to : {
              gte : data.to
            }
          }
        ]
      }
    })

    if (reservation) {
      return res.status(400).send({
        status: "error",
        data: {},
        message: "Already reserved at this time range"
      });
    }

    const request = await prisma.reservations.create({
      data : {
        from : data.from,
        to : data.to,
        guestCount : data.guestCount,
        user : {
          connect : { id : data.userId }
        },
        accomodation : {
          connect : { id : data.accommodationId }
        },
        reservedAt : new Date(),
      },

    });

    return res.status(201).send({
      status: "success",
      data: request,
      message: "Reservation created"
    })
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.status(400).send({
        status: "error",
        data: e.errors,
        message: e.message
      });
    }

    return res.status(500).send({
      status: "error",
      data: {},
      message: "Something went wrong"
    });
  }
}

/**
 * Show all requests
 */
export const list = async (req: Request, res: Response) => {
  const requests = await prisma.reservations.findMany({
    where: {
      canceledAt: null
    }
  });

  return res.send({
    status: "success",
    data: requests
  })
}

export const cancel = async (req: Request, res: Response) => {
  const currentDate = new Date();
  const data = await prisma.reservations.findUnique({
    where : {
      id: req.params.id
    }
  })
  if (data === null) {
    return res.status(400).send({
      status: "error",
      data: {},
      message: "Reservation does not exist"
    });
  }
  if (data.canceledAt !== null) {
    return res.status(400).send({
      status: "error",
      data: {},
      message: "Reservation already cancelled"
    });
  }
  if (data.from < currentDate && data.to > currentDate) {
    return res.status(400).send({
      status: "error",
      data: {},
      message: "Reservation in progress"
    });
  }
  if (data.to < currentDate) {
    return res.status(400).send({
      status: "error",
      data: {},
      message: "Reservation already ended"
    });
  }
  const request = await prisma.reservations.update({
    data: {
      canceledAt: currentDate
    },
    where: {
      id: req.params.id
    }
  });

  return res.send({
    status: "success",
    data: request,
    message: "Reservation removed"
  })
}
