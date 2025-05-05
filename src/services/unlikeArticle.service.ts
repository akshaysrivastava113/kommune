
import prisma from "../prisma/client"
export const unlikeArticleService = async (articleId: number, userId: number) => {
    try {
        const unlikeArticlesServiceRes = await prisma.articleLike.delete({
          where: {
            userId_articleId: { userId, articleId },
          },
        });
        if(!unlikeArticlesServiceRes) return null;
        return unlikeArticlesServiceRes;
      } catch (err) {
        return null;
      }
}