// src/services/classFeedbackService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassFeedbackService {
  async getAllFeedbacks(classId: string) {
    return await prisma.classFeedback.findMany({
      where: { 
        classId,
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
  }) {
    return await prisma.classFeedback.create({
      data,
    });
  }

  async getFeedbackById(id: string, userId: string) {
    return await prisma.classFeedback.findUnique({
      where: { id,
        userId,
       },
      include: { academy: true, user: true },
    });
  }

  async updateFeedback(id: string, data:string, userId: string) {
    return await prisma.classFeedback.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteFeedback(id: string, userId: string) {
    return await prisma.classFeedback.delete({
      where: { id,
        userId,
       },
    });
  }
}

export default new ClassFeedbackService();