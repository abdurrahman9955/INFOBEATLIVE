// src/routes/classContactRoutes.ts
import { Router } from 'express';
import { ClassAnnouncementController } from './announcement';
import announcementService from './deleteTime';

const bootcampBeginnerClassAnnouncement = Router();
const announcementController = new ClassAnnouncementController();

bootcampBeginnerClassAnnouncement.get('/', announcementController.getAll);
bootcampBeginnerClassAnnouncement.get('/:id', announcementController.getById);
bootcampBeginnerClassAnnouncement.post('/', announcementController.create);
bootcampBeginnerClassAnnouncement.put('/:id', announcementController.update);
bootcampBeginnerClassAnnouncement.delete('/:id', announcementController.delete);
bootcampBeginnerClassAnnouncement.delete('auto-delete', announcementService.deleteExpiredAnnouncements)

export default bootcampBeginnerClassAnnouncement;
