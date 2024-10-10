// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassContactService {
  async getAllContacts( classId: string) {
    return await prisma.academyContact.findMany({
      where: { 
        classId,
        level:'INTERMEDIATE',
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
    level:'INTERMEDIATE',
  }) {
    return await prisma.academyContact.create({
      data,
    });
  }

  async getContactById(id: string,  userId: string) {
    return await prisma.academyContact.findUnique({
      where: { id,
        userId,
        level:'INTERMEDIATE',
       },
      include: { bootcamp: true, user: true },
    });
  }

  async updateContact(id: string, data: string,  userId: string) {
    return await prisma.academyContact.update({
      where: { id,
        userId,
        level:'INTERMEDIATE',
       },
      data,
    });
  }

  async deleteContact(id: string,  userId: string) {
    return await prisma.academyContact.delete({
      where: { id,
        userId,
        level:'INTERMEDIATE',
       },
    });
  }
}

export default new ClassContactService();