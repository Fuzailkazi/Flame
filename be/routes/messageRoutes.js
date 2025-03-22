import Router from 'express';
import { protectRoute } from '../middleware/auth.js';
import {
  sendMessage,
  getConversation,
} from '../controllers/messageController.js';

const messagesRouter = Router();

messagesRouter.use(protectRoute);

messagesRouter.post('/send', sendMessage);
messagesRouter.get('/conversation/:userId', getConversation);

export default messagesRouter;
