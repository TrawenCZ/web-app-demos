import prisma from '../client';
import { Request, Response } from 'express';

/**
 * Return channel categories and their channels
 */
export const get = async (req: Request, res: Response) => {
  const channels = await prisma.channelCategory.findMany({
    where: {
      deletedAt: null,
    },
    select: {
      id: true,
      name: true,
      channels: {
        where: {
          deletedAt: null,
        },
        select: {
          id: true,
          name: true,
        }
      },
    }
  });

  return res.send({
    status: "success",
    data: channels,
  });
};

/**
 * Return channel
 */
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id!;
  const channel = await prisma.channel.findFirst({
    where: {
      id,
      deletedAt: null,
    },
    select: {
      id: true,
      name: true,
      messages: {
        where: {
          deletedAt: null
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          sender: {
            select: {
              id: true,
              name: true,
              picture: true,
            }
          }
        }
      }
    }
  });

  if (!channel) {
    return res.send({
      status: "error",
      data: {},
      message: "Channel not found",
    });
  }

  return res.send({
    status: "success",
    data: channel,
  });
};

/**
 * Create channel
 */
export const store = async (req: Request, res: Response) => {
  const channel = await prisma.channel.create({
    data: {
      name: req.body.name,
      categoryId: req.body.categoryId,
    },
  });

  return res.send({
    status: "success",
    data: channel
  });
}
