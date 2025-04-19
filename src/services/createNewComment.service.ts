
import prisma from "../prisma/client"
export const createNewCommentService = async (body: string, authorId: number, articleId: number) => {
    const newCommentRes = await prisma.comment.create({
        data: {
            body,
            postedDate: new Date(),
            author: {
                connect: {
                    id: authorId
                }
            },
            article: {
                connect: {
                    id: articleId
                }
            }
        }
    });
    if(!newCommentRes) return null;
    return newCommentRes;
}