import prisma from './prisma';
import { Prisma } from '@prisma/client';

class GroupMemberService {
  // Add a member to a group
  async addMember(userId: string, groupId: string) {
    try {
      const existingMember = await prisma.groupMember.findUnique({
        where: { userId_groupId: { userId, groupId } },
      });
      if (existingMember) {
        throw new Error('User is already a member of this group');
      }

      return prisma.groupMember.create({
        data: {
          userId,
          groupId,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to add member: ${error.message}`);
      } else {
        throw new Error('Failed to add member: An unknown error occurred');
      }
    }
  }

  // Remove a member from a group
  async removeMember(userId: string, groupId: string) {
    try {
      const member = await prisma.groupMember.findUnique({
        where: { userId_groupId: { userId, groupId } },
      });
      if (!member) {
        throw new Error('User is not a member of this group');
      }

      return prisma.groupMember.delete({
        where: { id: member.id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to remove member: ${error.message}`);
      } else {
        throw new Error('Failed to remove member: An unknown error occurred');
      }
    }
  }

  // Get all members of a group
  async getMembers(groupId: string) {
    try {
      return prisma.groupMember.findMany({
        where: { groupId },
        include: { user: true },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to get members: ${error.message}`);
      } else {
        throw new Error('Failed to get members: An unknown error occurred');
      }
    }
  }
}

export default new GroupMemberService();
