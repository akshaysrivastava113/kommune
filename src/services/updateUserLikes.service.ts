
import prisma from "../prisma/client"
export const updateUserLikesService = async (articleId: number, authorId: number) => {
    const updateUserLikesRes = prisma.user.update({
        where: { id: authorId },
        data:{ 
            likedArticles: {
                push: articleId
            }
        }
    });
    if(!updateUserLikesRes) return null;
    return updateUserLikesRes;
}