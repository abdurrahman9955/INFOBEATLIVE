// src/services/bootcampClassTextPostService.ts
import { PrismaClient } from "@prisma/client";
import { uploadToS3, deleteFromS3 } from "./amazonS3";

const prisma = new PrismaClient();

export const createAcademyTextPost = async (
  userId: string,
  academyId: string,
  title: string,
  content: string,
  files: Express.Multer.File[]
) => {
  const imageUrls = await Promise.all(files.map((file) => uploadToS3(file)));

  return await prisma.academyTextPost.create({
    data: {
      userId,
      academyId,
      title,
      content,
      imageUrls,
    },
  });
};

export const getAllAcademyTextPosts = async (academyId: string, ) => {
    return await prisma.academyTextPost.findMany({
      where: {
        academyId,
      },
      orderBy: { createdAt: "desc" },
    });
  };

export const getAcademyTextPosts = async (academyId: string, userId: string) => {
  return await prisma.academyTextPost.findMany({
    where: {
        academyId,
      userId,
    },
    orderBy: { createdAt: "desc" },
  });
};

export const updateAcademyTextPost = async (
  id: string,
  userId: string,
  data: Partial<{ content: string; files: Express.Multer.File[] }>,

) => {
  let imageUrls: string[] | undefined;
  if (data.files) {
    imageUrls = await Promise.all(data.files.map((file) => uploadToS3(file)));
  }

  return await prisma.academyTextPost.update({
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

export const deleteAcademyTextPost = async (id: string, userId: string,) => {
  const post = await prisma.academyTextPost.findUnique({
    where: { id,
             userId
     },
  });
  if (post) {
    await Promise.all(post.imageUrls.map((url: string) => deleteFromS3(url.split(".com/")[1])));
    return await prisma.academyTextPost.delete({ where: { id } });
  }
  throw new Error("Post not found ");
};
