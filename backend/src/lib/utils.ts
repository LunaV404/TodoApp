import jwt from 'jsonwebtoken'
import { Response } from "express";

export const generateToken = (userId, res: Response) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7days"});
    res.cookie("jwt",token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true,
        sameSite: "Strict",
        secure: process.env.NODE_ENV !== "development",
    })
    return token;
}