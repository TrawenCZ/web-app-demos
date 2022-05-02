import prisma from '../client';
import { Request, Response } from 'express';

/**
 * Return list of all users
 */
export const get = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      picture: true,
      email: true,
    },
  });
  return res.send({
    status: 'success',
    data: users,
  });
};

/**
 * Return one user
 */
export const getById = async (req: Request, res: Response) => {
  const id = req.params.id!;

  const users = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      picture: true,
      email: true,
    },
  });
  return res.send({
    status: 'success',
    data: users,
  });
};

/**
 * Update user
 */
export const update = async (req: Request, res: Response) => {
  const { id, name, email } = req.body;

  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      name,
      email,
    },
  });

  return res.send({
    status: 'success',
    data: user,
  });
};
