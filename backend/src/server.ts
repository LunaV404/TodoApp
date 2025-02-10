import * as fs from 'fs';
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { connectDB } from './lib/db';
dotenv.config()

export const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


app.listen(3000, () => {
    console.log('Server launched http://localhost:3000');
    connectDB();
});