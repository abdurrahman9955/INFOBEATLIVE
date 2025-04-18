// src/services/classContactService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClassPricingTextService {
  async getAllPricingTexts( classId: string) {
    return await prisma.classPriceText.findMany({
      where: { 
        classId,
       },
      include: {
        user: true,
      },
    });
  }

  async createPricingText(data: {
    
  classId:    String;
  userId:     String;
  title:      String;
  text:       String;
  leaning1:   String;
  leaning2:   String;
  leaning3:   String;
  leaning4:   String;
  leaning5:   String;
  leaning6:   String;
  leaning7:   String;
  leaning8:   String;
  leaning9:   String;
  leaning10:  String;
  leaning11:  String;
  leaning12:  String;
  leaning13:  String;
  leaning14:  String;
  leaning15:  String;
  leaning16:  String;
  leaning17:  String;
  leaning18:  String;
  leaning19:  String;
  leaning20:  String;
  leaning21:  String;
  leaning22:  String;
  leaning23:  String;
  leaning24:  String;
  leaning25:  String;
  leaning26:  String;
  leaning27:  String;
  leaning28:  String;

  }) {
    return await prisma.classPriceText.create({
      data,
    });
  }

  async getPricingTextById(id: string,  userId: string) {
    return await prisma.classPriceText.findUnique({
      where: { id,
        userId,
       },
      include: {  user: true },
    });
  }

  async updatePricingText(id: string, data: string,  userId: string) {
    return await prisma.classPriceText.update({
      where: { id,
        userId,
       },
      data,
    });
  }

  async deletePricingText(id: string,  userId: string) {
    return await prisma.classPriceText.delete({
      where: { id,
        userId,
       },
    });
  }
}

export default new ClassPricingTextService();