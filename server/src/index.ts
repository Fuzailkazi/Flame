import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//routes
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import matchRouter from './routes/matchRoutes';
import messagesRouter from './routes/messageRoutes';

import { connectDB } from './config/db.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/matches', matchRouter);
app.use('/api/messages', messagesRouter);

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT), connectDB();
});
