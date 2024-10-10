// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AnnouncementService {
  async getAllAnnouncements( classId: string) {
    return await prisma.academyClassAnnouncement.findMany({
      where: { 
        classId,
        level:'INTERMEDIATE',
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
    level:'INTERMEDIATE',
  }) {
    return await prisma.academyClassAnnouncement.create({
      data,
    });
  }

  async getAnnouncementById(id: string,  userId: string) {
    return await prisma.academyClassAnnouncement.findUnique({
      where: { id,
        userId,
        level:'INTERMEDIATE',
       },
      include: {  user: true },
    });
  }

  async updateAnnouncement(id: string, data: string,  userId: string) {
    return await prisma.academyClassAnnouncement.update({
      where: { id,
        userId,
        level:'INTERMEDIATE',
       },
      data,
    });
  }

  async deleteAnnouncement(id: string,  userId: string) {
    return await prisma.academyClassAnnouncement.delete({
      where: { id,
        userId,
        level:'INTERMEDIATE',
       },
    });
  }

}

export default new AnnouncementService();