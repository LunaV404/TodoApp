"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (userId, res) => {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7days" });
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true,
        sameSite: "Strict",
        secure: process.env.NODE_ENV !== "development",
    });
    return token;
};
exports.generateToken = generateToken;
