// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassContactService {
  async getAllContacts( classId: string) {
    return await prisma.classContact.findMany({
      where: { 
        classId,
       },
      include: {
        bootcamp: true,
        user: true,
      },
    });
  }

  async createContact(data: {
    classId: string;
    userId: string;
    name: string;
    email: string;
    reason: string;
    statement: string;
  }) {
    return await prisma.classContact.create({
      data,
    });
  }

  async getContactById(id: string,  userId: string) {
    return await prisma.classContact.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updateContact(id: string, data: string,  userId: string) {
    return await prisma.classContact.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteContact(id: string,  userId: string) {
    return await prisma.classContact.delete({
      where: { id,
        userId,
       },
    });
  }
}

export default new ClassContactService();