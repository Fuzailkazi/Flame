import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const signToken = (id: String) => {
  // jwt token
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
  });
};

export const signup = async (req: Request, res: Response) => {
  const { name, email, password, age, gender, genderPreference } = req.body;

  try {
    if (!name || !email || !password || !age || !gender || !genderPreference) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    if (age < 18) {
      return res.status(400).json({
        success: false,
        message: 'You must at lest 18 years old',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters',
      });
    }

    const newUser: IUser = await User.create({
      name,
      email,
      password,
      age,
      gender,
      genderPreference,
    });

    const token = signToken(newUser._id.toString());

    res.cookie('jwt', token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      httpOnly: true, // prevents XSS attacks
      sameSite: 'strict', // prevents CSRF attacks,
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log('Error in signup controller:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response) => {};

export const logout = async (req: Request, res: Response) => {};
