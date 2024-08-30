import prisma from './prisma';
import { Prisma } from '@prisma/client';

class ClassInstructorService {
  async addInstructors(userId: string, classId: string) {
    try {
      const existingAdmin = await prisma.groupAdmin.findUnique({
        where: { userId_classId: { userId, classId } },
      });
      if (existingAdmin) {
        throw new Error('User is already an admin of this group');
      }

      return prisma.groupAdmin.create({
        data: {
          userId,
          classId,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to add admin: ${error.message}`);
      } else {
        throw new Error('Failed to add admin: An unknown error occurred');
      }
    }
  }

  async removeInstructor(userId: string, classId: string) {
    try {
      const admin = await prisma.groupAdmin.findUnique({
        where: { userId_classId: { userId, classId } },
      });
      if (!admin) {
        throw new Error('User is not an Instructor of this group');
      }

      return prisma.groupAdmin.delete({
        where: { id: admin.id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to remove Instructor: ${error.message}`);
      } else {
        throw new Error('Failed to remove Instructor: An unknown error occurred');
      }
    }
  }

  async getInstructors(classId: string) {
    try {
      return prisma.groupAdmin.findMany({
        where: { classId },
        include: { user: true },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get admins: ${error.message}`);
      } else {
        throw new Error('Failed to get admins: An unknown error occurred');
      }
    }
  }
}

export default new ClassInstructorService();
