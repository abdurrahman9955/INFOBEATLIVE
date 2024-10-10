// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassHomeTextService {
  async getAllHomeTexts( bootcampId: string) {
    return await prisma.bootcampHomeText.findMany({
      where: { 
        bootcampId,
       },
      include: {
        user: true,
      },
    });
  }

  async createHomeText(data: {

    academyId:              String;
    userId:                 String;
    homeTitile:             String;
    homeDescription:        String;
    intructorExperience:    String;
    provenExperience:       String;
    achievement:            String;
    story:                  String;
    bootCampLearning:       String;
    beginnerLearning:       String;
    intermediateLearning:   String;
    advanceLearning:        String;
    facebook:               String;
    linkedIn:               String;
    youtube:                String;
    email:                  String;
    phoneNumber:            String;
    bootcampDetailsTitle:   String;
    bootcampDetailsText:    String;
    priceTitile:            String;
    priceText:              String;

  }) {
    return await prisma.bootcampHomeText.create({
      data,
    });
  }

  async getHomeTextById(id: string,  userId: string) {
    return await prisma.bootcampHomeText.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updateHomeText(id: string, data: string,  userId: string) {
    return await prisma.bootcampHomeText.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteHomeText(id: string,  userId: string) {
    return await prisma.bootcampHomeText.delete({
      where: { id,
        userId,
       },
    });
  }
}

export default new ClassHomeTextService();