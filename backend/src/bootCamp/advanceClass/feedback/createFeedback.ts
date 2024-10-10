// src/services/classFeedbackService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassFeedbackService {
  async getAllFeedbacks(classId: string) {
    return await prisma.bootcampClassContact.findMany({
      where: { 
        classId,
        level:'ADVANCED',
       },
      include: {
        academy: true,
        user: true,
      },
    });
  }

  async createFeedback(data: {
    classId: string;
    userId: string;
    name: string;
    reason: string;
    statement: string;
    rating: string;
    level:'ADVANCED',
  }) {
    return await prisma.bootcampClassContact.create({
      data,
    });
  }

  async getFeedbackById(id: string, userId: string) {
    return await prisma.bootcampClassContact.findUnique({
      where: { id,
        userId,
        level:'ADVANCED',
       },
      include: { academy: true, user: true },
    });
  }

  async updateFeedback(id: string, data:string, userId: string) {
    return await prisma.bootcampClassContact.update({
      where: { id,
        userId,
        level:'ADVANCED',
       },
      data,
    });
  }

  async deleteFeedback(id: string, userId: string) {
    return await prisma.bootcampClassContact.delete({
      where: { id,
        userId,
        level:'ADVANCED',
       },
    });
  }
}

export default new ClassFeedbackService();