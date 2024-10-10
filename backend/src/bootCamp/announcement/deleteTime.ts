// src/jobs/deleteExpiredAnnouncements.ts
import cron from 'node-cron';
import { AcademyAnnouncementService } from './delete';

const announcementService = new AcademyAnnouncementService();

// Schedule the job to run every minute (or adjust the interval as needed)
cron.schedule('* * * * *', async () => {
  console.log('Running job to delete expired announcements...');
  await announcementService.deleteExpiredAnnouncements();
});


export default announcementService;