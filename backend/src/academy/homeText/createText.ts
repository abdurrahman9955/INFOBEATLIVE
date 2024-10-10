// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassHomeTextService {
  async getAllHomeTexts( academyId: string) {
    return await prisma.academyHomeText.findMany({
      where: { 
        academyId,
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
    academyLearning:       String;
    beginnerLearning:       String;
    intermediateLearning:   String;
    advanceLearning:        String;
    facebook:               String;
    linkedIn:               String;
    youtube:                String;
    email:                  String;
    phoneNumber:            String;
    academyDetailsTitle:   String;
    academyDetailsText:    String;
    priceTitile:            String;
    priceText:              String;

  }) {
    return await prisma.academyHomeText.create({
      data,
    });
  }

  async getHomeTextById(id: string,  userId: string) {
    return await prisma.academyHomeText.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updateHomeText(id: string, data: string,  userId: string) {
    return await prisma.academyHomeText.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deleteHomeText(id: string,  userId: string) {
    return await prisma.academyHomeText.delete({
      where: { id,
        userId,
       },
    });
  }
}

export default new ClassHomeTextService();