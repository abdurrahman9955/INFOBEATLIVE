import prisma from './prisma';
import { Prisma } from '@prisma/client';

class ClassService {
  //@ts-ignore
  async createClass(data: Prisma.GroupCreateInput, userId: string) {
    return prisma.group.create({
      data: {
        ...data,
        createdBy: userId,
      },
    });
  }

  async getClassById(id: string) {
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
  async updateClass(id: string, data: Prisma.GroupUpdateInput, userId: string) {
    const group = await prisma.group.findUnique({ where: { id } });
    if (group?.createdBy !== userId) {
      throw new Error('Not authorized to update this class');
    }

    return prisma.group.update({
      where: { id },
      data,
    });
  }

  async deleteClass(id: string, userId: string) {
    const group = await prisma.group.findUnique({ where: { id } });
    if (group?.createdBy !== userId) {
      throw new Error('Not authorized to delete this class');
    }

    return prisma.group.delete({
      where: { id },
    });
  }

  async getAllClasses() {
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

export default new ClassService();
