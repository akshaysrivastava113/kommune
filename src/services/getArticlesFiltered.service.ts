import { ArticleType, Product } from "@prisma/client";
import prisma from "../prisma/client"


export const getArticlesFilteredService = async (product: Product, type: ArticleType) => {

    const article = await prisma.article.findMany({
        orderBy: [
            {
                createdAt: 'desc'
            }
        ],
        where: {
            product,
            type
        }
    });
    if(!article) return null;
    return article;
}