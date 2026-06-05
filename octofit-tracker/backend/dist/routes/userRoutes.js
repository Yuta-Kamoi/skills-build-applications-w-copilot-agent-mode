"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
exports.userRouter = router;
router.get('/', async (_req, res) => {
    const users = await User_1.default.find();
    res.json(users);
});
router.post('/', async (req, res) => {
    const user = await User_1.default.create(req.body);
    res.status(201).json(user);
});
