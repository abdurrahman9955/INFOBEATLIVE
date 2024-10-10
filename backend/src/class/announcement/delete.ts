// src/services/academyAnnouncementService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AcademyAnnouncementService {
  // Other methods...

  // Method to delete expired announcements
  async deleteExpiredAnnouncements() {
    const now = new Date();
    const expiredAnnouncements = await prisma.classAnnouncement.findMany({
      where: {
        endDate: {
          lte: now,
        },
      },
    });

    const deletePromises = expiredAnnouncements.map((announcement:any) =>
      prisma.classAnnouncement.delete({
        where: { id: announcement.id },
      })
    );

    await Promise.all(deletePromises);

    console.log(`${expiredAnnouncements.length} expired announcements deleted.`);
  }
}
