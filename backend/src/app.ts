import dotenv from 'dotenv';
import TodoModel from './models/todo'
import express, { NextFunction, Response, Request} from 'express';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.get("/", async(req, res, next) => {
    try {
        const todos = await TodoModel.find().exec();
        res.status(200).json(todos)
    } catch (error) {
        next(error)
    }
});

app.use((req, res, next) => {
    next(Error("Endpoint not found"))
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
        let errorMessage = "An unknow error has occured";
        if (error instanceof Error) errorMessage = error.message;
        res.status(500).json({error: errorMessage});
        next()
});

export default app;