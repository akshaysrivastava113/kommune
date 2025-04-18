
import { ArticleType } from "@prisma/client";
import prisma from "../prisma/client"
export const createArticle = async (title: string, description: string, authorId: number | undefined, type: ArticleType) => {
    const createArticleRes = prisma.article.create({
        data:{
            title,
            description,
            author: {
                connect: {
                    id: authorId
                }
            },
            type,
            createdAt: new Date()
        }
    })
    if(!createArticleRes) return null;
    return createArticleRes;
}