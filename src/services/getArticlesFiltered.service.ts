import { ArticleType, Product } from "@prisma/client";
import prisma from "../prisma/client"
export const getArticlesFilteredService = async (product: Product, type: ArticleType) => {
    const article = prisma.article.findMany({
        where: {
            product,
            type
        }
    });
    if(!article) return null;
    return article;
}