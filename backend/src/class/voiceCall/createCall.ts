import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const startVoiceCall = async (classId: string, userId: string) => {
  const voiceCall = await prisma.classVoiceCall.create({
    data: {
      classId,
      userId,
      startedAt: new Date(),
      link:generateUniqueLink()
    },
  });

  return voiceCall; // Ensure to return the created voice call object
};

export const endVoiceCall = async (callId: string) => {
  const voiceCall = await prisma.classVoiceCall.update({
    where: { id: callId },
    data: { endedAt: new Date() },
  });

  return voiceCall; // Ensure to return the updated voice call object
};

export const joinVoiceCall = async (callId: string, userId: string) => {
  const voiceCallParticipant = await prisma.classVoiceCallParticipant.create({
    data: {
      callId,
      userId,
    },
  });

  return voiceCallParticipant; // Ensure to return the created participant object
};

export const leaveVoiceCall = async (callId: string, userId: string) => {
  const voiceCallParticipant = await prisma.classVoiceCallParticipant.deleteMany({
    where: { callId, userId },
  });

  return voiceCallParticipant; // Ensure to return the deleted participant object
};


function generateUniqueLink() {
    const uniqueId = uuidv4(); // Generate a UUID
    return `https://myapp.com/video-call/${uniqueId}`; // Return a unique URL
  }