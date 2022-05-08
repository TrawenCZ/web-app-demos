import prisma from '../client';
import { Request, Response } from 'express';

/**
 * Create message
 */
export const store = async (req: Request, res: Response) => {
  const { content, channelId } = req.body;
  const senderId = req.header('X-User')!;

  const channel = await prisma.channel.findUnique({
    where: {
      id: channelId
    }
  });
  if (!channel) {
    return res.status(404).send({
      status: 'error',
      data: {},
      message: 'Channel not found'
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: senderId
    },
  });
  if (!user) {
    return res.status(404).send({
      status: 'error',
      data: {},
      message: 'User not found'
    });
  }

  const message = await prisma.message.create({
    data: {
      content,
      channelId,
      senderId
    }
  });

  return res.send({
    status: 'success',
    data: message,
  });
};

/**
 * Update message
 */
export const update = async (req: Request, res: Response) => {
  const { content } = req.body;
  const messageId = req.params.id;
  const senderId = req.header('X-User')!;

  const message = await prisma.message.findUnique({
    where: {
      id: messageId
    }
  });

  if (!message) {
    return res.status(404).send({
      status: 'error',
      data: {},
      message: 'Message not found'
    })
  }

  if (message.senderId !== senderId) {
    return res.status(403).send({
      status: 'error',
      data: {},
      message: 'Not authorized to edit given message'
    });
  }

  const update = await prisma.message.update({
    where: {
      id: messageId
    },
    data: {
      content,
      edited: true,
    },
  });

  return res.send({
    status: 'success',
    data: update,
  });
};

/**
 * Delete message
 */
export const remove = async (req: Request, res: Response) => {
  const messageId = req.params.id;
  const senderId = req.header('X-User')!;

  const message = await prisma.message.findUnique({
    where: {
      id: messageId
    }
  });

  if (!message) {
    return res.status(404).send({
      status: 'error',
      data: {},
      message: 'Message not found'
    })
  }

  if (message.senderId !== senderId) {
    return res.status(403).send({
      status: 'error',
      data: {},
      message: 'Not authorized to delete given message'
    });
  }

  const remove = await prisma.message.update({
    where: {
      id: messageId
    },
    data: {
      deletedAt: new Date(),
    },
  });

  return res.send({
    status: 'success',
    data: remove,
  });
};
