import { Router } from 'express';
import { io } from '../../app'; // Import io from your main app
import { startVoiceCall, endVoiceCall, joinVoiceCall, leaveVoiceCall } from './createCall';

const groupVoiceCallRouter = Router();

// Route for starting a voice call
groupVoiceCallRouter.post('/start/:userId/:groupId', async (req, res) => {
  const { userId, groupId } = req.params;
  try {
    const voiceCall = await startVoiceCall(groupId, userId);
    io.emit('start-voice-call', voiceCall); // Notify clients about the start of the voice call
    res.status(200).json(voiceCall);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

// Route for ending a voice call
groupVoiceCallRouter.post('/end/:callId', async (req, res) => {
  const { callId } = req.params;
  try {
    const voiceCall = await endVoiceCall(callId);
    io.emit('end-voice-call', voiceCall); // Notify clients about the end of the voice call
    res.status(200).json(voiceCall);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

// Route for joining a voice call
groupVoiceCallRouter.post('/join/:callId/:userId', async (req, res) => {
  const { callId, userId } = req.params;
  try {
    const voiceCallParticipant = await joinVoiceCall(callId, userId);
    io.emit('participant-joined', { callId, userId }); // Notify clients about a participant joining
    res.status(200).json(voiceCallParticipant);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

// Route for leaving a voice call
groupVoiceCallRouter.post('/leave/:callId/:userId', async (req, res) => {
  const { callId, userId } = req.params;
  try {
    const voiceCallParticipant = await leaveVoiceCall(callId, userId);
    io.emit('participant-left', { callId, userId }); // Notify clients about a participant leaving
    res.status(200).json(voiceCallParticipant);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
});

export default groupVoiceCallRouter;
