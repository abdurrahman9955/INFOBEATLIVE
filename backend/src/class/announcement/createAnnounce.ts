// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AnnouncementService {
  async getAllAnnouncements( classId: string) {
    return await prisma.classAnnouncement.findMany({
      where: { 
        classId,
       },
      include: {
        bootcamp: true,
        user: true,
      },
    });
  }

  async createAnnouncement(data: {
    classId: string;
    userId: string;
    title: string;
    startDate: Date;
    endDate: Date;
    statement: string;
  }) {
    return await prisma.classAnnouncement.create({
      data,
    });
  }

  async getAnnouncementById(id: string,  userId: string) {
    return await prisma.classAnnouncement.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updateAnnouncement(id: string, data: string,  userId: string) {
    return await prisma.classAnnouncement.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteAnnouncement(id: string,  userId: string) {
    return await prisma.classAnnouncement.delete({
      where: { id,
        userId,
       },
    });
  }

}

export default new AnnouncementService();