import prisma from './prisma';
import { Prisma } from '@prisma/client';

class ClassInstructorService {
  async addInstructor(userId: string, classId: string) {
    try {
      const existingAdmin = await prisma.academyInstructor.findUnique({
        where: { userId_classId: { userId, classId } },
      });
      if (existingAdmin) {
        throw new Error('User is already an Instructor of this group');
      }

      return prisma.academyInstructor.create({
        data: {
          userId,
          classId,
          level:"INTERMEDIATE"
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
      const admin = await prisma.academyInstructor.findUnique({
        where: { userId_classId: { userId, classId },
        level:"INTERMEDIATE" },
      });
      if (!admin) {
        throw new Error('User is not an Instructor of this group');
      }

      return prisma.academyInstructor.delete({
        where: { id: admin.id,
                 level:"INTERMEDIATE"
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
      return prisma.academyInstructor.findMany({
        where: { classId,
            level:"INTERMEDIATE"
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
