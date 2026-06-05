"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = require("./routes/userRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit';
const port = Number(process.env.PORT || 8000);
mongoose_1.default
    .connect(mongoUri)
    .then(() => {
    console.log('MongoDB connected to', mongoUri);
    app.listen(port, () => {
        console.log(`Backend server listening on http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});
app.get('/', (_req, res) => {
    res.json({ message: 'OctoFit Tracker backend running.' });
});
app.use('/api/users', userRoutes_1.userRouter);
