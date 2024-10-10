import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const startVoiceCall = async (classId: string, userId: string) => {
  const voiceCall = await prisma.bootcampClassVoiceCall.create({
    data: {
      classId,
      userId,
      level:'BEGINNER',
      startedAt: new Date(),
      link:generateUniqueLink()
    },
  });
  
  return voiceCall; // Ensure to return the created voice call object
};

export const endVoiceCall = async (callId: string) => {
  const voiceCall = await prisma.bootcampClassVoiceCall.update({
    where: { id: callId,
      level:'BEGINNER',
     },
    data: { endedAt: new Date() },
  });

  return voiceCall; // Ensure to return the updated voice call object
};

export const joinVoiceCall = async (callId: string, userId: string) => {
  const voiceCallParticipant = await prisma.bootcampClassVoiceCallParticipant.create({
    data: {
      callId,
      userId,
      level:'BEGINNER',
    },
  });

  return voiceCallParticipant; // Ensure to return the created participant object
};

export const leaveVoiceCall = async (callId: string, userId: string) => {
  const voiceCallParticipant = await prisma.bootcampClassVoiceCallParticipant.deleteMany({
    where: { callId, userId,
      level:'BEGINNER',
     },
  });

  return voiceCallParticipant; // Ensure to return the deleted participant object
};


function generateUniqueLink() {
    const uniqueId = uuidv4(); // Generate a UUID
    return `https://myapp.com/video-call/${uniqueId}`; // Return a unique URL
  }