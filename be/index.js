import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import matchRouter from './routes/matchRoutes.js';
import messageRouter from './routes/messageRoutes.js';

import { connectDB } from './config/db.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/matches', matchRouter);
app.use('/api/messages', messageRouter);

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT), connectDB();
});
