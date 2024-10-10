// src/services/bootcampClassTextPostService.ts
import { PrismaClient } from "@prisma/client";
import { uploadToS3, deleteFromS3 } from "./amazonS3";

const prisma = new PrismaClient();

export const createTextPost = async (
  userId:      String,
  title:       String,
  description: String,
  files: Express.Multer.File[]
) => {
  const contentUrl = await Promise.all(files.map((file) => uploadToS3(file)));

  return await prisma.post.create({
    data: {
      userId,
      title,
      description,
      contentUrl,
      type:'IMAGE'
    },
  });
};

export const getAllTextPosts = async ( ) => {
    return await prisma.post.findMany({
      where: {
        type:'IMAGE'
      },
      orderBy: { createdAt: "desc" },
    });
  };

export const getTextPosts = async ( userId: string) => {
  return await prisma.post.findMany({
    where: {
      userId,
      type:'IMAGE'
    },
    orderBy: { createdAt: "desc" },
  });
};

export const updateTextPost = async (
  id: string,
  userId: string,
  data: Partial<{ description: string; title: string; files: Express.Multer.File[] }>,

) => {
  let contentUrl: string[] | undefined;
  if (data.files) {
    contentUrl = await Promise.all(data.files.map((file) => uploadToS3(file)));
  }

  return await prisma.post.update({
    where: {
      id,
      userId,
      type:'IMAGE'
    },
    data: {
      content: data.description,
      contentUrl,
    },
  });
};

export const deleteTextPost = async (id: string, userId: string,) => {
  const post = await prisma.post.findUnique({
    where: { id,
             userId,
             type:'IMAGE'
     },
  });
  if (post) {
    await Promise.all(post.contentUrl.map((url: string) => deleteFromS3(url.split(".com/")[1])));
    return await prisma.post.delete({ where: { id } });
  }
  throw new Error("Post not found ");
};
