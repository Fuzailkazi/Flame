import Router from 'express';
import { protectRoute } from '../middleware/auth';

const userRouter = Router();

userRouter.put('/update', protectRoute, updateProfile);

export default userRouter;
