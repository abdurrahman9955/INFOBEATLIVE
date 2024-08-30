import { Request, Response } from 'express';

export interface ApiResponse<T> {
  success: boolean;
  error?: string;
  message?: string;
  followingCount?: number;
  followerCount?: number;
  followers?:T[];
  followerStatus?: boolean;
  followingStatus?: Record<string, boolean>;
  following?: boolean;
}

export type CustomRequest = Request & {
  user?: any; 
};

export interface UserProfile {
    id: number;
    
  }

export interface Follower {
    User: UserProfile;
    
  }
  