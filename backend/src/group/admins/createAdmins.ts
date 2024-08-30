import prisma from './prisma';
import { Prisma } from '@prisma/client';

class GroupAdminService {
  async addAdmin(userId: string, groupId: string) {
    try {
      const existingAdmin = await prisma.groupAdmin.findUnique({
        where: { userId_groupId: { userId, groupId } },
      });
      if (existingAdmin) {
        throw new Error('User is already an admin of this group');
      }

      return prisma.groupAdmin.create({
        data: {
          userId,
          groupId,
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

  async removeAdmin(userId: string, groupId: string) {
    try {
      const admin = await prisma.groupAdmin.findUnique({
        where: { userId_groupId: { userId, groupId } },
      });
      if (!admin) {
        throw new Error('User is not an admin of this group');
      }

      return prisma.groupAdmin.delete({
        where: { id: admin.id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to remove admin: ${error.message}`);
      } else {
        throw new Error('Failed to remove admin: An unknown error occurred');
      }
    }
  }

  async getAdmins(groupId: string) {
    try {
      return prisma.groupAdmin.findMany({
        where: { groupId },
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

export default new GroupAdminService();
