import express, {Request, Response} from "express";
import prisma from "../prisma/client";
const app = express();
require('dotenv').config();

app.get('/', (req: Request, res: Response) => {
    console.log(req.session);
    console.log("sessionID" , req.sessionID);
    (req.session as any).visited = false;
    res.send("Home route");
})

export default app;

