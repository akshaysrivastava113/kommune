import { ArticleType, Product } from "@prisma/client";
import prisma from "../prisma/client"


export const getArticlesFilteredService = async (product: Product, type: ArticleType) => {

    const article = await prisma.article.findMany({
        include: {
            _count: {
              select: { likes: true, comments: true } // total number of likes and comments
            },
          },
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