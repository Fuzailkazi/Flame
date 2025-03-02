"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signToken = (id) => {
    // jwt token
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
};
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const newUser = yield User_1.default.create({
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
    }
    catch (error) {
        console.log('Error in signup controller:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.logout = logout;
