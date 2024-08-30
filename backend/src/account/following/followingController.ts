import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getFollowingCount = async (req: Request, res: Response): Promise<void> => {
  try {
    const followerId = parseInt(req.headers['profile-id'] as string);

    if (!followerId) {
      res.status(400).json({ success: false, error: 'User ID is missing in request params' });
      return;
    }

    const following = await prisma.following.findMany({
      where: { followerId },
      include: {
        User: {
          include: {
            profile: true,
          },
        },
      },
    });

    res.json({ success: true, followingCount: following.length, following });
  } catch (error) {
    console.error('Error getting following:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const getFollowerCount = async (req: Request, res: Response): Promise<void> => {
  try {
    const followingId = parseInt(req.headers['profile-id'] as string);

    if (!followingId) {
      res.status(400).json({ success: false, error: 'User ID is missing in request params' });
      return;
    }

    const followers = await prisma.following.findMany({
      where: { followingId },
      include: {
        User: {
          include: {
            profile: true,
          },
        },
      },
    });

    res.json({ success: true, followerCount: followers.length, followers });
  } catch (error) {
    console.error('Error getting followers:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const followUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const followerId = parseInt(req.headers['user-id'] as string);
    const followingId = parseInt(req.headers['profile-id'] as string);

    if (!followerId || !followingId) {
      res.status(400).json({ success: false, error: 'Follower ID or Following ID is missing' });
      return;
    }

    const followingExists = await prisma.following.findFirst({
      where: { followerId, followingId },
    });
    if (followingExists) {
      res.status(200).json({ success: false, message: 'Already following this user' });
      return;
    }

    await prisma.following.create({
      data: { followerId, followingId },
    });

    res.json({ success: true, message: 'Followed successfully' });
  } catch (error) {
    console.error('Error following user:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const unfollowUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const followerId = parseInt(req.headers['user-id'] as string);
    const followingId = parseInt(req.headers['profile-id'] as string);

    if (!followerId || !followingId) {
      res.status(400).json({ success: false, error: 'Follower ID or Following ID is missing' });
      return;
    }

    const followingExists = await prisma.following.findFirst({
      where: { followerId, followingId },
    });
    if (!followingExists) {
      res.status(200).json({ success: false, message: 'Not following this user' });
      return;
    }

    await prisma.following.deleteMany({
      where: { followerId, followingId },
    });

    res.json({ success: true, message: 'Unfollowed successfully' });
  } catch (error) {
    console.error('Error unfollowing user:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
