import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

//routes
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import matchRouter from './routes/matchRoutes';
import messagesRouter from './routes/messageRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/matches', matchRouter);
app.use('/api/messages', messagesRouter);

app.listen(PORT, () => console.log('Server running on port ' + PORT));
