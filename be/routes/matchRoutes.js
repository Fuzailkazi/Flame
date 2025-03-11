import express from 'express';
import { protectRoute } from '../middleware/auth.js';
import {
  getMatches,
  getUserProfiles,
  swipeLeft,
  swipeRight,
} from '../controllers/matchController.js';

const matchRouter = express.Router();

matchRouter.post('/swipe-right/:likedUserId', protectRoute, swipeRight);
matchRouter.post('/swipe-left/:dislikedUserId', protectRoute, swipeLeft);

matchRouter.get('/', protectRoute, getMatches);
matchRouter.get('/user-profiles', protectRoute, getUserProfiles);

export default matchRouter;
