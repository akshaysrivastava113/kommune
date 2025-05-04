
import prisma from "../prisma/client"
export const likeArticleService = async (articleId: number, userId: number) => {
    const likeArticlesServiceRes = prisma.articleLike.create({
        data: {
            userId,
            articleId
        }
    })
    if(!likeArticlesServiceRes) return null;
    return likeArticlesServiceRes;
}