import { Request, Response } from "express";
import prisma from "../prisma/client";
import { createNewCommentService } from "../services/createNewComment.service";

interface CustomRequest extends Request {
    user?: any;
}

export const createNewComment = async (req:CustomRequest, res: Response): Promise<any> => {
    const recId = req.params.articleId;
    console.log("recIdrecId",recId);
    const articleId = Number(recId);
    const { body } = req.body;
    const authorId = req.user.userId;
    const newComment = await createNewCommentService(body, authorId, articleId);
    if(!newComment) return res.status(401).json({message: "failed"});
    return res.status(201).json({message: "Created"});
}