// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassContactService {
  async getAllContacts( academyId: string) {
    return await prisma.academyContact.findMany({
      where: { 
        academyId,
       },
      include: {
        bootcamp: true,
        user: true,
      },
    });
  }

  async createContact(data: {
    academyId: string;
    userId: string;
    name: string;
    email: string;
    reason: string;
    statement: string;
  }) {
    return await prisma.academyContact.create({
      data,
    });
  }

  async getContactById(id: string,  userId: string) {
    return await prisma.academyContact.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updateContact(id: string, data: string,  userId: string) {
    return await prisma.academyContact.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteContact(id: string,  userId: string) {
    return await prisma.academyContact.delete({
      where: { id,
        userId,
       },
    });
  }
}

export default new ClassContactService();