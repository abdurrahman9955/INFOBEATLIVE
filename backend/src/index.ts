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


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));

const prisma = new PrismaClient();

const server = createServer(app);
export const io = new SocketIOServer(server, {
  cors: {
    origin: '*', 
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
