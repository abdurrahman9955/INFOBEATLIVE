// src/controllers/friendRequest.controller.ts
import { Request, Response } from "express";
import { FriendRequestService } from "./createFriend";

const friendRequestService = new FriendRequestService();

export class FriendRequestController {
  async sendFriendRequest(req: Request, res: Response) {
    const { senderId, receiverId } = req.body;
    try {
      const request = await friendRequestService.sendFriendRequest(senderId, receiverId);
      res.status(201).json(request);
    }  catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: "An unknown error occurred" });
        }
      }
  }

  async acceptFriendRequest(req: Request, res: Response) {
    const { requestId } = req.params;
    try {
      const request = await friendRequestService.acceptFriendRequest(requestId);
      res.status(200).json(request);
    }  catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: "An unknown error occurred" });
        }
      }
  }

  async declineFriendRequest(req: Request, res: Response) {
    const { requestId } = req.params;
    try {
      const request = await friendRequestService.declineFriendRequest(requestId);
      res.status(200).json(request);
    }  catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: "An unknown error occurred" });
        }
      }
  }

  async blockUser(req: Request, res: Response) {
    const { requestId } = req.params;
    try {
      const request = await friendRequestService.blockUser(requestId);
      res.status(200).json(request);
    }  catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: "An unknown error occurred" });
        }
      }
  }

  async getPendingRequests(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const requests = await friendRequestService.getPendingRequests(userId);
      res.status(200).json(requests);
    }  catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: "An unknown error occurred" });
        }
      }
  }
}
