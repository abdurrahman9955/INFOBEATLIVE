import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { ApiResponse, CustomRequest } from './types';
import { Follower } from './types';

const prisma = new PrismaClient();

export const getFollowingCount = async (req: Request<{ userId: string }>, res: Response<ApiResponse<any>>): Promise<void> => {
  try {
    const followerId = parseInt(req.params.userId);

    if (isNaN(followerId)) {
      res.status(400).json({ success: false, error: 'User ID is missing or invalid' });
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

export const getFollowerCount = async (req: Request<{ userId: string }>, res: Response<ApiResponse<any>>): Promise<void> => {
  try {
    const followingId = parseInt(req.params.userId);

    if (isNaN(followingId)) {
      res.status(400).json({ success: false, error: 'User ID is missing or invalid' });
      return;
    }

    const userIdFromLocalStorage = parseInt(req.headers['user-id'] as string);

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

    const followersWithFollowStatus = followers.map((follower:any) => ({
      ...follower,
      isFollowing: follower.followerId === userIdFromLocalStorage,
    }));

    res.json({ success: true, followerCount: followers.length, followers: followersWithFollowStatus });
  } catch (error) {
    console.error('Error getting followers:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const getFollowing = async (req: CustomRequest, res: Response<ApiResponse<any>>): Promise<void> => {
  try {
    const followerId = parseInt(req.headers['user-id'] as string);

    if (isNaN(followerId)) {
      res.status(400).json({ success: false, error: 'User ID is missing or invalid in request headers' });
      return;
    }

    const following = await prisma.following.findMany({
      where: { followerId },
      include: {
        FollowingProfile: {
          include: {
            User: {
              include: {
                profile: true,
              },
            },
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

export const getFollowers = async (req: Request, res: Response<ApiResponse<any>>): Promise<void> => {
    try {
      const followingId = parseInt(req.headers['user-id'] as string);
  
      if (isNaN(followingId)) {
        res.status(400).json({ success: false, error: 'User ID is missing or invalid in request headers' });
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
      }) as Follower[]; // Type assertion here
  
      const followingStatus: Record<string, boolean> = {};
      followers.forEach((follower) => {
        const userId = follower.User.id;
        followingStatus[userId] = true;
      });
  
      res.json({ success: true, followerCount: followers.length, followers, followingStatus });
    } catch (error) {
      console.error('Error getting followers:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };

export const followUser = async (req: Request<{ userId: string }>, res: Response<ApiResponse<any>>): Promise<void> => {
  try {
    const followerId = parseInt(req.headers['user-id'] as string);
    const followingId = parseInt(req.params.userId);

    if (isNaN(followerId) || isNaN(followingId)) {
      res.status(400).json({ success: false, error: 'Follower ID or Following ID is missing or invalid' });
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

export const unfollowUser = async (req: Request<{ userId: string }>, res: Response<ApiResponse<any>>): Promise<void> => {
  try {
    const followerId = parseInt(req.headers['user-id'] as string);
    const followingId = parseInt(req.params.userId);

    if (isNaN(followerId) || isNaN(followingId)) {
      res.status(400).json({ success: false, error: 'Follower ID or Following ID is missing or invalid' });
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

export const checkFollowingStatus = async (req: Request<{ userId: string }>, res: Response<ApiResponse<any>>): Promise<void> => {
    try {
      const followerId = parseInt(req.headers['user-id'] as string);
      const followingId = parseInt(req.params.userId);
  
      if (isNaN(followerId) || isNaN(followingId)) {
        res.status(400).json({ success: false, error: 'Follower ID or Following ID is missing or invalid' });
        return;
      }
  
      const followingExists = await prisma.following.findFirst({
        where: { followerId, followingId },
      });
  
      res.json({ success: true, following: !!followingExists });
    } catch (error) {
      console.error('Error checking following status:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };
  
