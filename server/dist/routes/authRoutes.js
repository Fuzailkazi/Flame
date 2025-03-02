"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const authController_1 = require("../controllers/authController");
const authRouter = Router();
authRouter.post('/signup', authController_1.signup);
authRouter.post('/login', authController_1.login);
authRouter.post('/logout', authController_1.logout);
exports.default = authRouter;
