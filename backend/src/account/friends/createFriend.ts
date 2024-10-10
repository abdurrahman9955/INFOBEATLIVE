// src/services/friendRequest.service.ts
import { PrismaClient } from "@prisma/client";
import { FriendshipStatus } from "./enum";

const prisma = new PrismaClient();

export class FriendRequestService {
  // Send a friend request
  async sendFriendRequest(senderId: string, receiverId: string) {
    const existingRequest = await prisma.friendRequest.findFirst({
      where: {
        senderId,
        receiverId,
      },
    });

    if (existingRequest) {
      throw new Error('Friend request already exists');
    }

    return await prisma.friendRequest.create({
      data: {
        senderId,
        receiverId,
      },
    });
  }

  // Accept a friend request
  async acceptFriendRequest(requestId: string) {
    return await prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: FriendshipStatus.ACCEPTED },
    });
  }

  // Decline a friend request
  async declineFriendRequest(requestId: string) {
    return await prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: FriendshipStatus.DECLINED },
    });
  }

  // Block a user
  async blockUser(requestId: string) {
    return await prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: FriendshipStatus.BLOCKED, isBlocked: true },
    });
  }

  // Get all pending friend requests for a user
  async getPendingRequests(userId: string) {
    return await prisma.friendRequest.findMany({
      where: { receiverId: userId, status: FriendshipStatus.PENDING },
      include: {
        SenderUser: true, // Include the sender user information
      },
    });
  }
}
