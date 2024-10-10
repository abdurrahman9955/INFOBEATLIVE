// src/controllers/videoCallController.ts
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const startVideoCall = async (bootcampId: string, userId: string) => {
  const videoCall = await prisma.bootcampVideoCall.create({
    data: {
      bootcampId,
      userId,
      startedAt: new Date(),
      link: generateUniqueLink(), // Implement a function to generate a unique call link
    },
  });

  return videoCall; // Ensure to return the created video call object
};

export const endVideoCall = async (callId: string) => {
  const videoCall = await prisma.bootcampVideoCall.update({
    where: { id: callId },
    data: { endedAt: new Date() },
  });

  return videoCall; // Ensure to return the updated video call object
};

export const joinVideoCall = async (callId: string, userId: string) => {
  const videoCallParticipant = await prisma.bootcampVideoCallParticipant.create({
    data: {
      callId,
      userId,
    },
  });

  return videoCallParticipant; // Ensure to return the created participant object
};

export const leaveVideoCall = async (callId: string, userId: string) => {
  const videoCallParticipant = await prisma.bootcampVideoCallParticipant.deleteMany({
    where: { callId, userId },
  });

  return videoCallParticipant; // Ensure to return the deleted participant object
};

// Function to generate a unique link (implement according to your needs)
function generateUniqueLink() {
  const uniqueId = uuidv4(); // Generate a UUID
  return `https://myapp.com/video-call/${uniqueId}`; // Return a unique URL
}
