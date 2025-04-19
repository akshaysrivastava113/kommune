
import prisma from "../prisma/client"
export const likeArticleService = async (articleId: number, authorId: number) => {
    const createArticleRes = prisma.article.update({
        where: { id: articleId },
        data:{ 
            likes: {
                increment: 1
            }
        }
    });
    if(!createArticleRes) return null;
    return createArticleRes;
}