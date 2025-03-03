import Router from 'express';
import { signup, login, logout } from '../controllers/authController.js';
import { protectRoute } from '../middleware/auth.js';

const authRouter = Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

authRouter.get('/me', protectRoute, (req, res) => {
  res.send({
    success: true,
    user: req.user,
  });
});

export default authRouter;
