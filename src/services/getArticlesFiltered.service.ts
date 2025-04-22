import { ArticleType, Product } from "@prisma/client";
import prisma from "../prisma/client"

interface ArticleFilter {
    product?: Product | undefined,
    type?: ArticleType | undefined 
}

export const getArticlesFilteredService = async ({ product, type}: ArticleFilter) => {

    const article = prisma.article.findMany({
        where: {
            product,
            type
        }
    });
    if(!article) return null;
    return article;
}