import { Request, Response } from "express";
import { createArticle } from "../services/createArticle.service";
import { getAllArticlesService } from "../services/getAllArticles.service";
import { getArticleService } from "../services/getArticle.service";
import { likeArticleService } from "../services/likeArticle.service";
import { ArticleType, Product } from "@prisma/client";
import { getArticlesFilteredService } from "../services/getArticlesFiltered.service";
import { updateUserLikesService } from "../services/updateUserLikes.service";
import { createNewCommentService } from "../services/createNewComment.service";
import { getCommentsService } from "../services/getComments.service";

interface CustomRequest extends Request {
    user?: any;
}

interface ArticleFilter {
    product?: Product,
    type?: ArticleType 
}

export const getAllArticles = async (req: Request, res: Response) :Promise<any> => {
    const allArticles = await getAllArticlesService();
    if(!allArticles) return res.status(401).json({message: "failed"});
    return res.status(201).json(allArticles);
}

export const getArticle = async (req: CustomRequest, res: Response): Promise<any> => {
    let recId = req.params.id;
    let id: number = Number(recId);
    const userId = req.user.userId;
    const article = await getArticleService(id, userId);
    if(!article) return res.status(401).json({message: "not found"});
    return res.status(200).json(article);
}

export const getArticlesFiltered = async(req: Request, res: Response): Promise<any> => {
    let { product, type } = req.query;
    let productString = String(product);
    let articleTypeString = String(type);
    const productType = productString.toUpperCase() as Product;
    const typeType = articleTypeString.toUpperCase() as ArticleType;
    const articlesFiltered = await getArticlesFilteredService(productType, typeType);
    if(!articlesFiltered) return res.status(401).json({message: "not found"});
    return res.status(200).json(articlesFiltered);
}

export const getComments = async ( req: CustomRequest, res: Response): Promise<any> => {
    let recId = req.params.articleId;
    console.log(recId);
    let id: number = Number(recId);
    const allComments = await getCommentsService(id);
    if(!allComments) return res.status(401).json({message: "not found"});
    return res.status(200).json(allComments);
}


export const addComment = async ( req: CustomRequest, res: Response): Promise<any> => {
    const {body} = req.body;
    let recId = req.params.articleId;
    console.log(recId);
    let articleId: number = Number(recId);
    const authorId = req.user.userId;
    const addNewComment = createNewCommentService(body, authorId, articleId);
    if(!addNewComment) return res.status(401).json({message: "failed"});
    return res.status(201).json({message: "Created"});
}

export const likeArticle = async ( req: CustomRequest, res: Response): Promise<any> => {
    let recId = req.params.articleId;
    console.log(recId);
    let articleId: number = Number(recId);
    const userId = req.user.userId;
    const like = await likeArticleService(articleId, userId);
    console.log(like);
    if(!like) return res.status(401).json({message: "failed"});
    return res.status(201).json({message: "Updated"});  
}
export const createNewArticle = async (req: CustomRequest, res: Response) :Promise<any> => {
    const {title, description, type, product} = req.body;
    const authorId = req.user.userId;
    const article = await createArticle(title, description, authorId, type, product);
    if(!article) return res.status(401).json({message: "failed"});
    return res.status(201).json({message: "Created"});
} 
