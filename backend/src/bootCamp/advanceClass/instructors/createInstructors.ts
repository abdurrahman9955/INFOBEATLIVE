import prisma from './prisma';
import { Prisma } from '@prisma/client';

class ClassInstructorService {
  async addInstructor(userId: string, classId: string) {
    try {
      const existingAdmin = await prisma.bootcampInstructor.findUnique({
        where: { userId_classId: { userId, classId } },
      });
      if (existingAdmin) {
        throw new Error('User is already an Instructor of this group');
      }

      return prisma.bootcampInstructor.create({
        data: {
          userId,
          classId,
          level:"ADVANCED"
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to add admin: ${error.message}`);
      } else {
        throw new Error('Failed to add Instructor: An unknown error occurred');
      }
    }
  }
  
  async removeInstructor(userId: string, classId: string) {
    try {
      const admin = await prisma.bootcampInstructor.findUnique({
        where: { userId_classId: { userId, classId },
        level:"ADVANCED" },
      });
      if (!admin) {
        throw new Error('User is not an Instructor of this group');
      }

      return prisma.bootcampInstructor.delete({
        where: { id: admin.id,
                 level:"ADVANCED"
         },
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
      return prisma.bootcampInstructor.findMany({
        where: { classId,
            level:"ADVANCED"
         },
        include: { user: true },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get Instructors: ${error.message}`);
      } else {
        throw new Error('Failed to get Instructors: An unknown error occurred');
      }
    }
  }
}

export default new ClassInstructorService();
