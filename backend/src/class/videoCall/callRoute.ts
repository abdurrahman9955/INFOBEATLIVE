// src/routes/videoCallRoutes.ts
import { Router } from 'express';
import { io } from '../../app';
import { startVideoCall, endVideoCall, joinVideoCall, leaveVideoCall } from './createCall';

const classVideoCallRouter = Router();

// Route for starting a video call
classVideoCallRouter.post('/start/:userId/:classId', async (req, res) => {
  const { userId, classId } = req.params;
  try {
    const videoCall = await startVideoCall(classId, userId);
    io.emit('start-video-call', videoCall); // Notify clients about the start of the video call
    res.status(200).json(videoCall);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

// Route for ending a video call
classVideoCallRouter.post('/end/:callId', async (req, res) => {
  const { callId } = req.params;
  try {
    const videoCall = await endVideoCall(callId);
    io.emit('end-video-call', videoCall); // Notify clients about the end of the video call
    res.status(200).json(videoCall);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

// Route for joining a video call
classVideoCallRouter.post('/join/:callId/:userId', async (req, res) => {
  const { callId, userId } = req.params;
  try {
    const videoCallParticipant = await joinVideoCall(callId, userId);
    io.emit('join-video-call', videoCallParticipant); // Notify clients about a participant joining
    res.status(200).json(videoCallParticipant);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

// Route for leaving a video call
classVideoCallRouter.post('/leave/:callId/:userId', async (req, res) => {
  const { callId, userId } = req.params;
  try {
    const videoCallParticipant = await leaveVideoCall(callId, userId);
    io.emit('leave-video-call', videoCallParticipant); // Notify clients about a participant leaving
    res.status(200).json(videoCallParticipant);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

export default classVideoCallRouter;
