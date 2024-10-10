import prisma from './prisma';
import { Prisma } from '@prisma/client';

class ClassInstructorService {
  async addInstructor(userId: string, classId: string) {
    try {
      const existingInstructor = await prisma.instructor.findUnique({
        where: { userId_classId: { userId, classId } },
      });
      if (existingInstructor) {
        throw new Error('User is already an Instructor of this group');
      }

      return prisma.instructor.create({
        data: {
          userId,
          classId,
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
      const instructor = await prisma.instructor.findUnique({
        where: { userId_classId: { userId, classId },
       },
      });
      if (!instructor) {
        throw new Error('User is not an Instructor of this group');
      }

      return prisma.instructor.delete({
        where: { id: instructor.id,
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
      return prisma.instructor.findMany({
        where: { classId,
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
