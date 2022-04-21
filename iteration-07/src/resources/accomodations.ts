import { object, string, number, date, ValidationError, boolean } from 'yup';
import { Request, Response } from 'express'
import prisma from '../client';


export const list = async (req: Request, res: Response) => {

  const accommodations = await prisma.accomodation.findMany();

  return res.send({
    status: "success",
    data: accommodations
  })
}

const accommodationSchema = object({
  name: string().required(),
  description: string().default("Description will be added"),
  mainPhoto: string().required(),
  userId: string().required(),
  location: string().required(),
  addedAt: date().required(),
  price: number().required()
});


export const store = async (req: Request, res: Response) => {
  try {
    const data = await accommodationSchema.validate(req.body);
    const accommodation = await prisma.accomodation.create({
      data
    });

    return res.status(201).send({
      status: "success",
      data: accommodation,
      message: "Accommodation stored in system"
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

export const update = async (req: Request, res: Response) => {
  try {
    const data = await accommodationSchema.validate(req.body);
    const accommodation = await prisma.accomodation.update({
      data : data,
      where : {
        id : req.params.id
      }
    });

    return res.status(201).send({
      status: "success",
      data: accommodation,
      message: "Accommodation stored in system"
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

export const get = async (req: Request, res: Response) => {
  if (req.query.price === undefined) {
    return res.status(400).send({
      status: "sucess",
      data: {},
      message: "Query price is missing"
    })
  }
  const bottomLimit = (<any> req.query.price).gte || 0
  const upperLimit = (<any> req.query.price).lte || Number.MAX_SAFE_INTEGER


  const data = await prisma.accomodation.findMany({
    where: {
      price : {
        lte : upperLimit,
        gte : bottomLimit
      }
    }
  });

  return res.send({
    status: "success",
    data: data
  })
}
