// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassContactService {
  async getAllContacts( bootcampId: string) {
    return await prisma.bootcampContact.findMany({
      where: { 
        bootcampId,
       },
      include: {
        bootcamp: true,
        user: true,
      },
    });
  }

  async createContact(data: {
    bootcampId: string;
    userId: string;
    name: string;
    email: string;
    reason: string;
    statement: string;
  }) {
    return await prisma.bootcampContact.create({
      data,
    });
  }

  async getContactById(id: string,  userId: string) {
    return await prisma.bootcampContact.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updateContact(id: string, data: string,  userId: string) {
    return await prisma.bootcampContact.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteContact(id: string,  userId: string) {
    return await prisma.bootcampContact.delete({
      where: { id,
        userId,
       },
    });
  }
}

export default new ClassContactService();