// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AnnouncementService {
  async getAllAnnouncements( academyId: string) {
    return await prisma.academyAnnouncement.findMany({
      where: { 
        academyId,
       },
      include: {
        user: true,
      },
    });
  }

  async createAnnouncement(data: {
    academyId: string;
    userId: string;
    title: string;
    startDate: Date;
    endDate: Date;
    statement: string;
  }) {
    return await prisma.academyAnnouncement.create({
      data,
    });
  }

  async getAnnouncementById(id: string,  userId: string) {
    return await prisma.academyAnnouncement.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updateAnnouncement(id: string, data: string,  userId: string) {
    return await prisma.academyAnnouncement.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteAnnouncement(id: string,  userId: string) {
    return await prisma.academyAnnouncement.delete({
      where: { id,
        userId,
       },
    });
  }

}

export default new AnnouncementService();