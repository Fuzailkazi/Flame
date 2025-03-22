import Router from 'express';
import { protectRoute } from '../middleware/auth.js';
import { updateProfile } from '../controllers/userController.js';
const userRouter = Router();

userRouter.put('/update', protectRoute, updateProfile);

export default userRouter;
