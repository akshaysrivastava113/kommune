import express, {Request, Response} from "express";
import prisma from "../prisma/client";
const app = express();
require('dotenv').config();

app.get('/', (req: Request, res: Response) => {
    res.send("Home route");
})

export default app;

