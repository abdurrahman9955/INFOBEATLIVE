// src/services/bootcampClassTextPostService.ts
import { PrismaClient } from "@prisma/client";
import { uploadToS3, deleteFromS3 } from "./amazonS3";

const prisma = new PrismaClient();

export const createClassTextPost = async (
  classId: string,
  userId: string,
  content: string,
  files: Express.Multer.File[]
) => {
  const imageUrls = await Promise.all(files.map((file) => uploadToS3(file)));

  return await prisma.classTextPost.create({
    data: {
      classId,
      userId,
      content,
      imageUrls,
    },
  });
};

export const getAllClassTextPosts = async (classId: string, ) => {
    return await prisma.classTextPost.findMany({
      where: {
        classId,
      },
      orderBy: { createdAt: "desc" },
    });
  };

export const getClassTextPosts = async (classId: string, userId: string) => {
  return await prisma.classTextPost.findMany({
    where: {
      classId,
      userId,
    },
    orderBy: { createdAt: "desc" },
  });
};

export const updateClassTextPost = async (
  id: string,
  userId: string,
  data: Partial<{ content: string; files: Express.Multer.File[] }>,

) => {
  let imageUrls: string[] | undefined;
  if (data.files) {
    imageUrls = await Promise.all(data.files.map((file) => uploadToS3(file)));
  }

  return await prisma.classTextPost.update({
    where: {
      id,
      userId,
    },
    data: {
      content: data.content,
      imageUrls,
    },
  });
};

export const deleteClassTextPost = async (id: string, userId: string,) => {
  const post = await prisma.classTextPost.findUnique({
    where: { id,
             userId
     },
  });
  if (post) {
    await Promise.all(post.imageUrls.map((url: string) => deleteFromS3(url.split(".com/")[1])));
    return await prisma.classTextPost.delete({ where: { id } });
  }
  throw new Error("Post not found ");
};
