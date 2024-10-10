// src/server.ts
import express from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import session from 'express-session';

import groupRouter from './group/createGroup/groupMain';
import groupAdminRouter from './group/admins/adminMain';
import groupIconRouter from './group/icon/iconMain';
import groupMembersRouter from './group/members/memberMain';
import groupPostRouter from './group/post/postMain';
import groupShorts from './group/shortVideos/shorts';
import groupVideos from './group/videos/videos';
import groupVoiceCallRouter from './group/voiceCall/voiceCallRoute';
import groupVideoCallRouter from './group/videoCall/callRoute';
import groupAudioChatRouter from './group/chats/audioChat/audioRoute';
import groupDocumentChatRouter from './group/chats/document/documentRoute';
import groupImageChatRouter from './group/chats/imageChat/imageRoute';
import groupRecordingChatRouter from './group/chats/recording/recordingRoute';
import groupTextChatRouter from './group/chats/textChat/textRoute';
import groupVideoChatRouter from './group/chats/videoChat/videoRoute';

import createClassRouter from './class/createClass/classRoute';
import classAnnouncement from './class/announcement/announceRoute';
import classContactRouter from './class/contact/contactRoute';
import classFeedbackRouter from './class/feedback/feedbackRoute';
import classIconRouter from './class/icon/iconMain';
import classInstructorsRouter from './class/instructors/instructorMain';
import classPostRouter from './class/post/postMain';
import classPricingRouter from './class/priceText/textRoute';
import classShorts from './class/shortVideos/shorts';
import classVideoCallRouter from './bootCamp/videoCall/callRoute';
import classVideos from './class/videos/videos';
import classVoiceCallRouter from './class/voiceCall/voiceCallRoute';
import classCourseRouter from './class/course/course/courseRoute';
import classCourseVideos from './class/course/media/videos';
import classCourseSection from './class/course/section/sectionRoute';
import classExclusiveCourseRouter from './class/exclusive/course/courseRoute';
import classExclusiveVideos from './class/exclusive/media/videos';
import classExclusiveSection from './class/exclusive/section/sectionRoute';
import classAudioChatRouter from './class/chats/audioChat/audioRoute';
import classDocumentChatRouter from './class/chats/document/documentRoute';
import classImageChatRouter from './class/chats/imageChat/imageRoute';
import classRecordingChatRouter from './class/chats/recording/recordingRoute';
import classTextChatRouter from './class/chats/textChat/textRoute';
import classVideoChatRouter from './class/chats/videoChat/videoRoute';

import createBootcampRouter from './bootCamp/createBootCamp/bootCampMain';
import bootcampAnnouncement from './bootCamp/announcement/announceRoute';
import bootcampContactRouter from './bootCamp/contact/contactRoute';
import bootcampTextRouter from './bootCamp/homeText/textRoute';
import bootcampIconRouter from './bootCamp/icon/iconMain';
import bootcampPostRouter from './bootCamp/post/postMain';
import bootcampPricingRouter from './bootCamp/priceText/textRoute';
import bootcampShorts from './bootCamp/shortVideos/shorts';
import bootcampVideos from './bootCamp/videos/videos';
import bootCampVideoCallRouter from './bootCamp/videoCall/callRoute';

import createBeginnerClass from './bootCamp/beginnerClass/create/classRoute';
import bootcampBeginnerClassAnnouncement from './bootCamp/beginnerClass/announcement/announceRoute';
import bootcampBeginnerClassContact from './bootCamp/beginnerClass/contact/contactRoute';
import bootcampBeginnerClassFeedback from './bootCamp/beginnerClass/feedback/feedbackRoute';
import bootcampBeginnerClassIcon from './bootCamp/beginnerClass/icon/iconMain';
import bootcampBeginnerClassInstructors from './bootCamp/beginnerClass/instructors/instructorMain';
import bootcampBeginnerClassPost from './bootCamp/beginnerClass/post/postMain';
import bootcampBeginnerClassVideos from './bootCamp/beginnerClass/videos/videos';
import bootcampBeginnerClassShorts from './bootCamp/beginnerClass/shortVideos/shorts';
import bootcampBeginnerClassVoiceCall from './bootCamp/beginnerClass/voiceCall/voiceCallRoute';
import bootcampBeginnerClassVideoCall from './bootCamp/beginnerClass/videoCall/callRoute';
import createBootcampBeginnerClassCourse from './bootCamp/beginnerClass/course/course/courseRoute';
import bootcampBeginnerClassCourseVideos from './bootCamp/beginnerClass/course/media/videos';
import bootcampBeginnerClassCourseSection from './bootCamp/beginnerClass/course/section/sectionRoute';
import bootcampBeginnerClassAudioChat from './bootCamp/beginnerClass/chats/audioChat/audioRoute';
import bootcampBeginnerClassDocumentChat from './bootCamp/beginnerClass/chats/document/documentRoute';
import bootcampBeginnerClassImageChat from './bootCamp/beginnerClass/chats/imageChat/imageRoute';
import bootcampBeginnerClassRecordingChat from './bootCamp/beginnerClass/chats/recording/recordingRoute';
import bootcampBeginnerClassTextChat from './bootCamp/beginnerClass/chats/textChat/textRoute';
import bootcampBeginnerClassVideoChat from './bootCamp/beginnerClass/chats/videoChat/videoRoute';

import createIntermediateClass from './bootCamp/intermediateClass/create/classRoute';
import bootcampIntermediateClassAnnouncement from './bootCamp/intermediateClass/announcement/announceRoute';
import bootcampIntermediateClassContact from './bootCamp/intermediateClass/contact/contactRoute';
import bootcampIntermediateClassFeedback from './bootCamp/intermediateClass/feedback/feedbackRoute';
import bootcampIntermediateClassIcon from './bootCamp/intermediateClass/icon/iconMain';
import bootcampIntermediateClassInstructors from './bootCamp/intermediateClass/instructors/instructorMain';
import bootcampIntermediateClassPost from './bootCamp/intermediateClass/post/postMain';
import bootcampIntermediateClassShorts from './bootCamp/intermediateClass/shortVideos/shorts';
import bootcampIntermediateClassVideoCall from './bootCamp/intermediateClass/videoCall/callRoute';
import bootcampIntermediateClassVideos from './bootCamp/intermediateClass/videos/videos';
import bootcampIntermediateClassVoiceCall from './bootCamp/intermediateClass/voiceCall/voiceCallRoute';
import createBootcampIntermediateClassCourse from './bootCamp/intermediateClass/course/course/courseRoute';
import bootcampIntermediateClassCourseVideos from './bootCamp/intermediateClass/course/media/videos';
import bootcampIntermediateClassCourseSection from './bootCamp/intermediateClass/course/section/sectionRoute';
import bootcampIntermediateClassAudioChat from './bootCamp/intermediateClass/chats/audioChat/audioRoute';
import bootcampIntermediateClassDocumentChat from './bootCamp/intermediateClass/chats/document/documentRoute';
import bootcampIntermediateClassImageChat from './bootCamp/intermediateClass/chats/imageChat/imageRoute';
import bootcampIntermediateClassRecordingChat from './bootCamp/intermediateClass/chats/recording/recordingRoute';
import bootcampIntermediateClassTextChat from './bootCamp/intermediateClass/chats/textChat/textRoute';
import bootcampIntermediateClassVideoChat from './bootCamp/intermediateClass/chats/videoChat/videoRoute';

import createBootcampAdvanceClass from './bootCamp/advanceClass/create/classRoute';
import bootcampAdvanceClassAnnouncement from './bootCamp/advanceClass/announcement/announceRoute';
import bootcampAdvanceClassContact from './bootCamp/advanceClass/contact/contactRoute';
import bootcampAdvanceClassFeedback from './bootCamp/advanceClass/feedback/feedbackRoute';
import bootcampAdvanceClassIcon from './bootCamp/advanceClass/icon/iconMain';
import bootcampAdvanceClassInstructors from './bootCamp/advanceClass/instructors/instructorMain';
import bootcampAdvanceClassPost from './bootCamp/advanceClass/post/postMain';
import bootcampAdvanceClassShorts from './bootCamp/advanceClass/shortVideos/shorts';
import bootcampAdvanceClassVideoCall from './bootCamp/advanceClass/videoCall/callRoute';
import bootcampAdvanceClassVideos from './bootCamp/advanceClass/videos/videos';
import bootcampAdvanceClassVoiceCall from './bootCamp/advanceClass/voiceCall/voiceCallRoute';
import bootcampAdvanceClassCourseCreate from './bootCamp/advanceClass/course/course/courseRoute';
import bootcampAdvanceClassCourseVideos from './bootCamp/advanceClass/course/media/videos';
import bootcampAdvanceClassCourseSection from './bootCamp/advanceClass/course/section/sectionRoute';
import bootcampAdvanceClassAudioChat from './bootCamp/advanceClass/chats/audioChat/audioRoute';
import bootcampAdvanceClassDocumentChat from './bootCamp/advanceClass/chats/document/documentRoute';
import bootcampAdvanceClassImageChat from './bootCamp/advanceClass/chats/imageChat/imageRoute';
import bootcampAdvanceClassRecordingChat from './bootCamp/advanceClass/chats/recording/recordingRoute';
import bootcampAdvanceClassTextChat from './bootCamp/advanceClass/chats/textChat/textRoute';
import bootcampAdvanceClassVideoChat from './bootCamp/advanceClass/chats/videoChat/videoRoute';

import createAcademyRouter from './academy/createAcademy/academyMain';
import academyAnnouncementRouter from './academy/announcement/announceRoute';
import academyContactRouter from './academy/contact/contactRoute';
import academyHomeTextRouter from './academy/homeText/textRoute';
import academyIconRouter from './academy/icon/iconMain';
import academyPostRouter from './academy/post/postMain';
import academyPricingRouter from './academy/priceText/textRoute';
import academyShortsRouter from './academy/shortVideos/shorts';
import academyVideoCallRouter from './academy/videoCall/callRoute';
import academyVideosRouter from './academy/videos/videos';

import createAcademyBeginnerClass from './academy/beginnerClass/create/classRoute';
import academyBeginnerClassAnnouncement from './academy/beginnerClass/announcement/announceRoute';
import academyBeginnerClassContact from './academy/beginnerClass/contact/contactRoute';
import academyBeginnerClassFeedback from './academy/beginnerClass/feedback/feedbackRoute';
import academyBeginnerClassIcon from './academy/beginnerClass/icon/iconMain';
import academyBeginnerClassInstructors from './academy/beginnerClass/instructors/instructorMain';
import academyBeginnerClassPost from './academy/beginnerClass/post/postMain';
import academyBeginnerClassShorts from './academy/beginnerClass/shortVideos/shorts';
import academyBeginnerClassVideoCall from './academy/beginnerClass/videoCall/callRoute';
import academyBeginnerClassVideos from './academy/beginnerClass/videos/videos';
import academyBeginnerClassVoiceCall from './academy/beginnerClass/voiceCall/voiceCallRoute';
import academyBeginnerClassCourseCreate from './academy/beginnerClass/course/course/courseRoute';
import academyBeginnerClassCourseVideos from './academy/beginnerClass/course/media/videos';
import academyBeginnerClassAudioChat from './academy/beginnerClass/chats/audioChat/audioRoute';
import academyBeginnerClassDocumentChat from './academy/beginnerClass/chats/document/documentRoute';
import academyBeginnerClassImageChat from './academy/beginnerClass/chats/imageChat/imageRoute';
import academyBeginnerClassRecordingChat from './academy/beginnerClass/chats/recording/recordingRoute';
import academyBeginnerClassTextChat from './academy/beginnerClass/chats/textChat/textRoute';
import academyBeginnerClassVideoChat from './academy/beginnerClass/chats/videoChat/videoRoute';
import academyBeginnerClassCourseSection from './academy/beginnerClass/course/section/courseRoute';

import createAcademyIntermediateClass from './academy/intermediateClass/create/classRoute';
import academyIntermediateClassAnnouncement from './academy/intermediateClass/announcement/announceRoute';
import academyIntermediateClassContact from './academy/intermediateClass/contact/contactRoute';
import academyIntermediateClassFeedback from './academy/intermediateClass/feedback/feedbackRoute';
import academyIntermediateClassIcon from './academy/intermediateClass/icon/iconMain';
import academyIntermediateClassInstructors from './academy/intermediateClass/instructors/instructorMain';
import academyIntermediateClassPost from './academy/intermediateClass/post/postMain';
import academyIntermediateClassShorts from './academy/intermediateClass/shortVidoes/shorts';
import academyIntermediateClassVideoCall from './academy/intermediateClass/videoCall/callRoute';
import academyIntermediateClassVideos from './academy/intermediateClass/videos/videos';
import academyIntermediateClassVoiceCall from './academy/intermediateClass/voiceCall/voiceCallRoute';
import academyIntermediateClassCourseCreate from './academy/intermediateClass/course/course/courseRoute';
import academyIntermediateClassCourseVideos from './academy/intermediateClass/course/media/videos';
import academyIntermediateClassCourseSection from './academy/intermediateClass/course/section/sectionRoute';
import academyIntermediateClassAudioChat from './academy/intermediateClass/chats/audioChat/audioRoute';
import academyIntermediateClassDocumentChat from './academy/intermediateClass/chats/document/documentRoute';
import academyIntermediateClassImageChat from './academy/intermediateClass/chats/imageChat/imageRoute';
import academyIntermediateClassRecordingChat from './academy/intermediateClass/chats/recording/recordingRoute';
import academyIntermediateClassTextChat from './academy/intermediateClass/chats/textChat/textRoute';
import academyIntermediateClassVideoChat from './academy/intermediateClass/chats/videoChat/videoRoute';

import createAcademyAdvanceClass from './academy/advanceClass/create/classRoute';
import academyAdvanceClassAnnouncement from './academy/advanceClass/announcement/announceRoute';
import academyAdvanceClassContact from './academy/advanceClass/contact/contactRoute';
import academyAdvanceClassFeedback from './academy/advanceClass/feedback/feedbackRoute';
import academyAdvanceClassIcon from './academy/advanceClass/icon/iconMain';
import academyAdvanceClassInstructors from './academy/advanceClass/instructors/instructorMain';
import academyAdvanceClassPost from './academy/advanceClass/post/postMain';
import academyAdvanceClassShorts from './academy/advanceClass/shortVideos/shorts';
import academyAdvanceClassVideoCall from './academy/advanceClass/videoCall/callRoute';
import academyAdvanceClassVideos from './academy/advanceClass/videos/videos';
import academyAdvanceClassVoiceCall from './academy/advanceClass/voiceCall/voiceCallRoute';
import academyAdvanceClassCourseCreate from './academy/advanceClass/course/course/courseRoute';
import academyAdvanceClassCourseVideos from './academy/advanceClass/course/media/videos';
import academyAdvanceClassCourseSection from './academy/advanceClass/course/section/sectionRoute';
import academyAdvanceClassAudioChat from './academy/advanceClass/chats/audioChat/audioRoute';
import academyAdvanceClassDocumentChat from './academy/advanceClass/chats/document/documentRoute';
import academyAdvanceClassImageChat from './academy/advanceClass/chats/imageChat/imageRoute';
import academyAdvanceClassRecordingChat from './academy/advanceClass/chats/recording/recordingRoute';
import academyAdvanceClassTextChat from './academy/advanceClass/chats/textChat/textRoute';
import academyAdvanceClassVideoChat from './academy/advanceClass/chats/videoChat/videoRoute';









const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));

const prisma = new PrismaClient();

const server = createServer(app);
export const io = new SocketIOServer(server, {
  cors: {
    origin: '*', // Configure CORS according to your needs
  },
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','http://http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204); 
  } else {
    next(); 
  }
});

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: 'none',
    },
  })
);


prisma.$connect().then(() => {
  console.log('Connected to the database');
}).catch((err:any) => {
  console.error('Error connecting to the database', err);
});

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/group/createGroup', groupRouter);
app.use('/group/admins', groupAdminRouter);
app.use('/group/icon', groupIconRouter);
app.use('/group/members', groupMembersRouter);
app.use('/group/post', groupPostRouter);
app.use('/group/shortVideos', groupShorts);
app.use('/group/videoCall', groupVideoCallRouter);
app.use('/group/videos', groupVideos);
app.use('/group/voiceCall', groupVoiceCallRouter);
app.use('/group/chats/audioChat', groupAudioChatRouter);
app.use('/group/chats/document', groupDocumentChatRouter);
app.use('/group/chats/imageChat', groupImageChatRouter);
app.use('/group/chats/recording', groupRecordingChatRouter);
app.use('/group/chats/textChat', groupTextChatRouter);
app.use('/group/chats/videoChat', groupVideoChatRouter);

app.use('/class/createClass', createClassRouter);
app.use('/class/contact', classContactRouter);
app.use('/class/announcement', classAnnouncement);
app.use('/class/feedback', classFeedbackRouter);
app.use('/class/icon', classIconRouter);
app.use('/class/instructors', classInstructorsRouter);
app.use('/class/post', classPostRouter);
app.use('/class/priceText', classPricingRouter);
app.use('/class/shortVideos', classShorts);
app.use('/class/videoCall', classVideoCallRouter);
app.use('/class/videos', classVideos);
app.use('/class/voiceCall', classVoiceCallRouter);
app.use('/class/course/course', classCourseRouter);
app.use('/class/course/media', classCourseVideos );
app.use('/class/course/section', classCourseSection);
app.use('/class/exclusive/course', classExclusiveCourseRouter);
app.use('/class/exclusive/media', classExclusiveVideos);
app.use('/class/exclusive/section', classExclusiveSection);
app.use('/class/chats/audioChat', classAudioChatRouter);
app.use('/class/chats/document', classDocumentChatRouter);
app.use('/class/chats/imageChat', classImageChatRouter);
app.use('/class/chats/recording', classRecordingChatRouter);
app.use('/class/chats/textChat', classTextChatRouter);
app.use('/class/chats/videoChat', classVideoChatRouter);

app.use('/bootCamp/createBootCamp', createBootcampRouter);
app.use('/bootCamp/announcement', bootcampAnnouncement);
app.use('/bootCamp/contact', bootcampContactRouter);
app.use('/bootCamp/homeText', bootcampTextRouter);
app.use('/bootCamp/icon', bootcampIconRouter);
app.use('/bootCamp/post', bootcampPostRouter);
app.use('/bootCamp/priceText', bootcampPricingRouter);
app.use('/bootCamp/shortVideos', bootcampShorts);
app.use('/bootCamp/videoCall', bootCampVideoCallRouter);
app.use('/bootCamp/videos', bootcampVideos);

app.use('/bootCamp/beginnerClass/create', createBeginnerClass);
app.use('/bootCamp/beginnerClass/announcement', bootcampBeginnerClassAnnouncement );
app.use('/bootCamp/beginnerClass/contact', bootcampBeginnerClassContact);
app.use('/bootCamp/beginnerClass/feedback', bootcampBeginnerClassFeedback);
app.use('/bootCamp/beginnerClass/icon', bootcampBeginnerClassIcon);
app.use('/bootCamp/beginnerClass/instructors', bootcampBeginnerClassInstructors);
app.use('/bootCamp/beginnerClass/post', bootcampBeginnerClassPost);
app.use('/bootCamp/beginnerClass/shortVideos', bootcampBeginnerClassShorts);
app.use('/bootCamp/beginnerClass/videoCall', bootcampBeginnerClassVideoCall);
app.use('/bootCamp/beginnerClass/videos', bootcampBeginnerClassVideos);
app.use('/bootCamp/beginnerClass/voiceCall', bootcampBeginnerClassVoiceCall);
app.use('/bootCamp/beginnerClass/course/course', createBootcampBeginnerClassCourse);
app.use('/bootCamp/beginnerClass/course/media', bootcampBeginnerClassCourseVideos);
app.use('/bootCamp/beginnerClass/course/section', bootcampBeginnerClassCourseSection);
app.use('/bootCamp/beginnerClass/chats/audioChat', bootcampBeginnerClassAudioChat);
app.use('/bootCamp/beginnerClass/chats/document', bootcampBeginnerClassDocumentChat);
app.use('/bootCamp/beginnerClass/chats/imageChat', bootcampBeginnerClassImageChat);
app.use('/bootCamp/beginnerClass/chats/recording', bootcampBeginnerClassRecordingChat);
app.use('/bootCamp/beginnerClass/chats/textChat', bootcampBeginnerClassTextChat);
app.use('/bootCamp/beginnerClass/chats/videoChat', bootcampBeginnerClassVideoChat);

app.use('/bootCamp/intermediateClass/create', createIntermediateClass);
app.use('/bootCamp/intermediateClass/announcement', bootcampIntermediateClassAnnouncement);
app.use('/bootCamp/intermediateClass/contact', bootcampIntermediateClassContact);
app.use('/bootCamp/intermediateClass/feedback', bootcampIntermediateClassFeedback);
app.use('/bootCamp/intermediateClass/icon', bootcampIntermediateClassIcon);
app.use('/bootCamp/intermediateClass/instructors', bootcampIntermediateClassInstructors);
app.use('/bootCamp/intermediateClass/post', bootcampIntermediateClassPost);
app.use('/bootCamp/intermediateClass/shortVideos', bootcampIntermediateClassShorts);
app.use('/bootCamp/intermediateClass/videoCall', bootcampIntermediateClassVideoCall);
app.use('/bootCamp/intermediateClass/videos', bootcampIntermediateClassVideos);
app.use('/bootCamp/intermediateClass/voiceCall', bootcampIntermediateClassVoiceCall);
app.use('/bootCamp/intermediateClass/course/course', createBootcampIntermediateClassCourse);
app.use('/bootCamp/intermediateClass/course/media', bootcampIntermediateClassCourseVideos);
app.use('/bootCamp/intermediateClass/course/section', bootcampIntermediateClassCourseSection);
app.use('/bootCamp/intermediateClass/chats/audioChat', bootcampIntermediateClassAudioChat);
app.use('/bootCamp/intermediateClass/chats/document', bootcampIntermediateClassDocumentChat);
app.use('/bootCamp/intermediateClass/chats/imageChat', bootcampIntermediateClassImageChat);
app.use('/bootCamp/intermediateClass/chats/recording', bootcampIntermediateClassRecordingChat);
app.use('/bootCamp/intermediateClass/chats/textChat', bootcampIntermediateClassTextChat);
app.use('/bootCamp/intermediateClass/chats/videoChat', bootcampIntermediateClassVideoChat);

app.use('/bootCamp/advanceClass/create', createBootcampAdvanceClass);
app.use('/bootCamp/advanceClass/contact', bootcampAdvanceClassContact);
app.use('/bootCamp/advanceClass/announcement', bootcampAdvanceClassAnnouncement);
app.use('/bootCamp/advanceClass/feedback', bootcampAdvanceClassFeedback);
app.use('/bootCamp/advanceClass/icon', bootcampAdvanceClassIcon);
app.use('/bootCamp/advanceClass/instructors', bootcampAdvanceClassInstructors);
app.use('/bootCamp/advanceClass/post', bootcampAdvanceClassPost);
app.use('/bootCamp/advanceClass/shortVideos', bootcampAdvanceClassShorts);
app.use('/bootCamp/advanceClass/videoCall', bootcampAdvanceClassVideoCall);
app.use('/bootCamp/advanceClass/videos', bootcampAdvanceClassVideos);
app.use('/bootCamp/advanceClass/voiceCall', bootcampAdvanceClassVoiceCall);
app.use('/bootCamp/advanceClass/course/course', bootcampAdvanceClassCourseCreate);
app.use('/bootCamp/advanceClass/course/media', bootcampAdvanceClassCourseVideos);
app.use('/bootCamp/advanceClass/course/section', bootcampAdvanceClassCourseSection);
app.use('/bootCamp/advanceClass/chats/audioChat', bootcampAdvanceClassAudioChat);
app.use('/bootCamp/advanceClass/chats/document', bootcampAdvanceClassDocumentChat);
app.use('/bootCamp/advanceClass/chats/imageChat', bootcampAdvanceClassImageChat);
app.use('/bootCamp/advanceClass/chats/recording', bootcampAdvanceClassRecordingChat);
app.use('/bootCamp/advanceClass/chats/textChat', bootcampAdvanceClassTextChat);
app.use('/bootCamp/advanceClass/chats/videoChat', bootcampAdvanceClassVideoChat);

app.use('/academy/createAcademy', createAcademyRouter);
app.use('/academy/announcement', academyAnnouncementRouter);
app.use('/academy/contact', academyContactRouter);
app.use('/academy/homeText', academyHomeTextRouter);
app.use('/academy/icon', academyIconRouter);
app.use('/academy/post', academyPostRouter);
app.use('/academy/pricing', academyPricingRouter);
app.use('/academy/shortVideos', academyShortsRouter);
app.use('/academy/videoCall', academyVideoCallRouter);
app.use('/academy/videos', academyVideosRouter);

app.use('/academy/beginnerClass/create', createAcademyBeginnerClass);
app.use('/academy/beginnerClass/announcement', academyBeginnerClassAnnouncement);
app.use('/academy/beginnerClass/contact', academyBeginnerClassContact);
app.use('/academy/beginnerClass/feedback', academyBeginnerClassFeedback);
app.use('/academy/beginnerClass/icon', academyBeginnerClassIcon);
app.use('/academy/beginnerClass/instructors', academyBeginnerClassInstructors);
app.use('/academy/beginnerClass/post', academyBeginnerClassPost);
app.use('/academy/beginnerClass/shortVideos', academyBeginnerClassShorts);
app.use('/academy/beginnerClass/videoCall', academyBeginnerClassVideoCall);
app.use('/academy/beginnerClass/videos', academyBeginnerClassVideos);
app.use('/academy/beginnerClass/voiceCall', academyBeginnerClassVoiceCall);
app.use('/academy/beginnerClass/course/course', academyBeginnerClassCourseCreate);
app.use('/academy/beginnerClass/course/media', academyBeginnerClassCourseVideos);
app.use('/academy/beginnerClass/course/section', academyBeginnerClassCourseSection);
app.use('/academy/beginnerClass/chats/audioChat', academyBeginnerClassAudioChat);
app.use('/academy/beginnerClass/chats/document', academyBeginnerClassDocumentChat);
app.use('/academy/beginnerClass/chats/imageChat', academyBeginnerClassImageChat);
app.use('/academy/beginnerClass/chats/recording', academyBeginnerClassRecordingChat);
app.use('/academy/beginnerClass/chats/textChat', academyBeginnerClassTextChat);
app.use('/academy/beginnerClass/chats/videoChat', academyBeginnerClassVideoChat);

app.use('/academy/intermediateClass/create', createAcademyIntermediateClass);
app.use('/academy/intermediateClass/announcement', academyIntermediateClassAnnouncement);
app.use('/academy/intermediateClass/contact', academyIntermediateClassContact);
app.use('/academy/intermediateClass/feedback', academyIntermediateClassFeedback);
app.use('/academy/intermediateClass/icon', academyIntermediateClassIcon);
app.use('/academy/intermediateClass/instructors', academyIntermediateClassInstructors);
app.use('/academy/intermediateClass/post', academyIntermediateClassPost);
app.use('/academy/intermediateClass/shortVideos', academyIntermediateClassShorts);
app.use('/academy/intermediateClass/videoCall', academyIntermediateClassVideoCall);
app.use('/academy/intermediateClass/videos', academyIntermediateClassVideos);
app.use('/academy/intermediateClass/VoiceCall', academyIntermediateClassVoiceCall);
app.use('/academy/intermediateClass/course/course', academyIntermediateClassCourseCreate);
app.use('/academy/intermediateClass/course/media', academyIntermediateClassCourseVideos);
app.use('/academy/intermediateClass/course/section', academyIntermediateClassCourseSection);
app.use('/academy/intermediateClass/chats/audioChat', academyIntermediateClassAudioChat);
app.use('/academy/intermediateClass/chats/document', academyIntermediateClassDocumentChat);
app.use('/academy/intermediateClass/chats/imageChat', academyIntermediateClassImageChat);
app.use('/academy/intermediateClass/chats/recording', academyIntermediateClassRecordingChat);
app.use('/academy/intermediateClass/chats/textChat', academyIntermediateClassTextChat);
app.use('/academy/intermediateClass/chats/videoChat', academyIntermediateClassVideoChat);

app.use('/academy/advanceClass/create', createAcademyAdvanceClass);
app.use('/academy/advanceClass/contact', academyAdvanceClassContact);
app.use('/academy/advanceClass/announcement', academyAdvanceClassAnnouncement);
app.use('/academy/advanceClass/feedback', academyAdvanceClassFeedback);
app.use('/academy/advanceClass/icon', academyAdvanceClassIcon);
app.use('/academy/advanceClass/instructors', academyAdvanceClassInstructors);
app.use('/academy/advanceClass/post', academyAdvanceClassPost);
app.use('/academy/advanceClass/shortVideos', academyAdvanceClassShorts);
app.use('/academy/advanceClass/videoCall', academyAdvanceClassVideoCall);
app.use('/academy/advanceClass/videos', academyAdvanceClassVideos);
app.use('/academy/advanceClass/voiceCall', academyAdvanceClassVoiceCall);
app.use('/academy/advanceClass/course/course', academyAdvanceClassCourseCreate);
app.use('/academy/advanceClass/course/media', academyAdvanceClassCourseVideos);
app.use('/academy/advanceClass/course/section', academyAdvanceClassCourseSection);
app.use('/academy/advanceClass/chats/audioChat', academyAdvanceClassAudioChat);
app.use('/academy/advanceClass/chats/document', academyAdvanceClassDocumentChat);
app.use('/academy/advanceClass/chats/imageChat', academyAdvanceClassImageChat);
app.use('/academy/advanceClass/chats/textChat', academyAdvanceClassTextChat);
app.use('/academy/advanceClass/chats/recording', academyAdvanceClassRecordingChat);
app.use('/academy/advanceClass/chats/videoChat', academyAdvanceClassVideoChat);






io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Socket event handlers
  socket.on('offer', (offer) => {
    socket.broadcast.emit('offer', offer);
  });

  socket.on('answer', (answer) => {
    socket.broadcast.emit('answer', answer);
  });

  socket.on('ice-candidate', (candidate) => {
    socket.broadcast.emit('ice-candidate', candidate);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect(); 
  process.exit();
});
