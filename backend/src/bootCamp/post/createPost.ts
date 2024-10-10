// src/services/bootcampClassTextPostService.ts
import { PrismaClient } from "@prisma/client";
import { uploadToS3, deleteFromS3 } from "./amazonS3";

const prisma = new PrismaClient();

export const createBootcampTextPost = async (
  userId: string,
  bootcampId: string,
  title: string,
  content: string,
  files: Express.Multer.File[]
) => {
  const imageUrls = await Promise.all(files.map((file) => uploadToS3(file)));

  return await prisma.bootcampTextPost.create({
    data: {
      userId,
      bootcampId,
      title,
      content,
      imageUrls,
    },
  });
};

export const getAllBootcampTextPosts = async (bootcampId: string, ) => {
    return await prisma.bootcampTextPost.findMany({
      where: {
        bootcampId,
      },
      orderBy: { createdAt: "desc" },
    });
  };

export const getBootcampTextPosts = async (bootcampId: string, userId: string) => {
  return await prisma.bootcampTextPost.findMany({
    where: {
      bootcampId,
      userId,
    },
    orderBy: { createdAt: "desc" },
  });
};

export const updateBootcampTextPost = async (
  id: string,
  userId: string,
  data: Partial<{ content: string; files: Express.Multer.File[] }>,

) => {
  let imageUrls: string[] | undefined;
  if (data.files) {
    imageUrls = await Promise.all(data.files.map((file) => uploadToS3(file)));
  }

  return await prisma.bootcampTextPost.update({
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

export const deleteBootcampTextPost = async (id: string, userId: string,) => {
  const post = await prisma.bootcampTextPost.findUnique({
    where: { id,
             userId
     },
  });
  if (post) {
    await Promise.all(post.imageUrls.map((url: string) => deleteFromS3(url.split(".com/")[1])));
    return await prisma.bootcampTextPost.delete({ where: { id } });
  }
  throw new Error("Post not found ");
};
