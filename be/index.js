import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createServer } from 'http';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import matchRouter from './routes/matchRoutes.js';
import messageRouter from './routes/messageRoutes.js';

import { connectDB } from './config/db.js';
import { initializeSocket } from './socket/socket.server.js';

const app = express();
const httpServer = createServer(app);
dotenv.config();
const PORT = process.env.PORT || 5000;

initializeSocket(httpServer);

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/matches', matchRouter);
app.use('/api/messages', messageRouter);

httpServer.listen(PORT, () => {
  console.log('Server running on port ' + PORT), connectDB();
});
