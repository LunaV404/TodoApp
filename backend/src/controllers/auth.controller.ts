import { Request, Response } from "express";

export const login = async(req: Request, res: Response) => {
    res.send("Login")
}

export const logout = async(req: Request, res: Response) => {
    res.send("logout")
}

export const signup = (req: Request, res: Response) => {
    res.send("signup")
}