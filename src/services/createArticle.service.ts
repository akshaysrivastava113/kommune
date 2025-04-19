
import { ArticleType, Product } from "@prisma/client";
import prisma from "../prisma/client"
export const createArticle = async (title: string, description: string, authorId: number | undefined, type: ArticleType, product: Product) => {
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
            product,
            createdAt: new Date(),
            likes: 0
        }
    })
    if(!createArticleRes) return null;
    return createArticleRes;
}