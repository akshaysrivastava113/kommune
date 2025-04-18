import { Request, Response } from "express";
import { createArticle } from "../services/createArticle.service";

interface CustomRequest extends Request {
    user?: any;
  }

export const createNewArticle = async (req: CustomRequest, res: Response) :Promise<any> => {
    const {title, description, type} = req.body;
    const authorId = req.user.userId;
    const article = await createArticle(title, description, authorId, type);
    if(!article) return res.status(401).json({message: "failed"});
    return res.status(201).json({message: "Created"});
} 

export const getAllArticles = async (req: Request, res: Response) :Promise<any> => {
    const {title, description, authorId, type} = req.body;
    const article = await createArticle(title, description, authorId, type);
    if(!article) return res.status(401).json({message: "failed"});
    return res.status(201).json({message: "Created"});
} 