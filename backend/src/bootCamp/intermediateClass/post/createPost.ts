// src/services/bootcampClassTextPostService.ts
import { PrismaClient } from "@prisma/client";
import { uploadToS3, deleteFromS3 } from "./amazonS3";

const prisma = new PrismaClient();

export const createBootcampClassTextPost = async (
  classId: string,
  userId: string,
  content: string,
  files: Express.Multer.File[]
) => {
  const imageUrls = await Promise.all(files.map((file) => uploadToS3(file)));

  return await prisma.bootcampClassTextPost.create({
    data: {
      classId,
      userId,
      content,
      imageUrls,
      level: "INTERMEDIATE", // Ensure the level is set to BEGINNER
    },
  });
};

export const getAllBootcampClassTextPosts = async (classId: string, ) => {
    return await prisma.bootcampClassTextPost.findMany({
      where: {
        classId,
        level: "INTERMEDIATE", // Filter by BEGINNER level
      },
      orderBy: { createdAt: "desc" },
    });
  };

export const getBootcampClassTextPosts = async (classId: string, userId: string) => {
  return await prisma.bootcampClassTextPost.findMany({
    where: {
      classId,
      userId,
      level: "INTERMEDIATE", // Filter by BEGINNER level
    },
    orderBy: { createdAt: "desc" },
  });
};

export const updateBootcampClassTextPost = async (
  id: string,
  userId: string,
  data: Partial<{ content: string; files: Express.Multer.File[] }>,

) => {
  let imageUrls: string[] | undefined;
  if (data.files) {
    imageUrls = await Promise.all(data.files.map((file) => uploadToS3(file)));
  }

  return await prisma.bootcampClassTextPost.update({
    where: {
      id,
      userId,
      level: "INTERMEDIATE", // Ensure the post being updated is at the BEGINNER level
    },
    data: {
      content: data.content,
      imageUrls,
    },
  });
};

export const deleteBootcampClassTextPost = async (id: string, userId: string,) => {
  const post = await prisma.bootcampClassTextPost.findUnique({
    where: { id,
             userId
     },
  });
  if (post && post.level === "INTERMEDIATE") {
    await Promise.all(post.imageUrls.map((url: string) => deleteFromS3(url.split(".com/")[1])));
    return await prisma.bootcampClassTextPost.delete({ where: { id } });
  }
  throw new Error("Post not found or not at INTERMEDIATE level");
};
