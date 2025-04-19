import { Request, Response } from "express";
import { createArticle } from "../services/createArticle.service";
import { getAllArticlesService } from "../services/getAllArticles.service";
import { getArticleService } from "../services/getArticle.service";

interface CustomRequest extends Request {
    user?: any;
}

export const getAllArticles = async (req: Request, res: Response) :Promise<any> => {
    const allArticles = await getAllArticlesService();
    if(!allArticles) return res.status(401).json({message: "failed"});
    return res.status(201).json(allArticles);
} 

export const getArticle = async (req: Request, res: Response): Promise<any> => {
    let recId = req.params.id;
    let id: number = Number(recId);
    const article = await getArticleService(id);
    if(!article) return res.status(401).json({message: "not found"});
    return res.status(200).json(article);
}
export const createNewArticle = async (req: CustomRequest, res: Response) :Promise<any> => {
    const {title, description, type, product} = req.body;
    const authorId = req.user.userId;
    const article = await createArticle(title, description, authorId, type, product);
    if(!article) return res.status(401).json({message: "failed"});
    return res.status(201).json({message: "Created"});
} 
