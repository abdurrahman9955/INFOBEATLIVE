// src/services/group.service.ts
import prisma from './prisma';
import { Prisma } from '@prisma/client';

class GroupService {
  //@ts-ignore
  async createGroup(data: Prisma.GroupCreateInput, userId: string) {
    return prisma.group.create({
      data: {
        ...data,
        createdBy: userId,
      },
    });
  }

  async getGroupById(id: string) {
    return prisma.group.findUnique({
      where: { id },
      include: {
        creator: true,
        admins: true,
        members: true,
        mediaUploads: true,
        textPosts: true,
        chats: true,
        voiceCalls: true,
        videoCalls: true,
        program: true,
      },
    });
  }
//@ts-ignore
  async updateGroup(id: string, data: Prisma.GroupUpdateInput, userId: string) {
    const group = await prisma.group.findUnique({ where: { id } });
    if (group?.createdBy !== userId) {
      throw new Error('Not authorized to update this group');
    }

    return prisma.group.update({
      where: { id },
      data,
    });
  }

  async deleteGroup(id: string, userId: string) {
    const group = await prisma.group.findUnique({ where: { id } });
    if (group?.createdBy !== userId) {
      throw new Error('Not authorized to delete this group');
    }

    return prisma.group.delete({
      where: { id },
    });
  }

  async getAllGroups() {
    return prisma.group.findMany({
      include: {
        creator: true,
        admins: true,
        members: true,
        mediaUploads: true,
        textPosts: true,
        chats: true,
        voiceCalls: true,
        videoCalls: true,
        program: true,
      },
    });
  }
}

export default new GroupService();
