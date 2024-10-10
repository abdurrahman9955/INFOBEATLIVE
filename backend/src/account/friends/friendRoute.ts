// src/routes/friendRequest.routes.ts
import { Router } from "express";
import { FriendRequestController } from "./friend";

const friendsRouter = Router();
const friendRequestController = new FriendRequestController();

friendsRouter.post("/send", friendRequestController.sendFriendRequest);
friendsRouter.put("/accept/:requestId", friendRequestController.acceptFriendRequest);
friendsRouter.put("/decline/:requestId", friendRequestController.declineFriendRequest);
friendsRouter.put("/block/:requestId", friendRequestController.blockUser);
friendsRouter.get("/pending/:userId", friendRequestController.getPendingRequests);

export default friendsRouter;
