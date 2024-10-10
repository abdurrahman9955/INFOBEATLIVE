// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const academyBeginnerClassAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

academyBeginnerClassAnnouncement.get('/', announcementController.getAll);
academyBeginnerClassAnnouncement.get('/:id', announcementController.getById);
academyBeginnerClassAnnouncement.post('/', announcementController.create);
academyBeginnerClassAnnouncement.put('/:id', announcementController.update);
academyBeginnerClassAnnouncement.delete('/:id', announcementController.delete);
academyBeginnerClassAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default academyBeginnerClassAnnouncement;
