import { Request, Response } from 'express'
import prisma from '../client';

export const list = async (req: Request, res: Response) => {

    const users = await prisma.user.findMany();

    return res.send({
        status: "success",
        data: users
    })
}
