"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const matchRoutes_1 = __importDefault(require("./routes/matchRoutes"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const db_js_1 = require("./config/db.js");
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api/matches', matchRoutes_1.default);
app.use('/api/messages', messageRoutes_1.default);
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT), (0, db_js_1.connectDB)();
});
