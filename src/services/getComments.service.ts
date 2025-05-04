import prisma from "../prisma/client"
export const getCommentsService = async (id: number) => {
    const allComments = prisma.article.findUnique({
        include: {
            _count: {
              select: { comments: true } // total number of comments
            },
            comments: {
                include: {
                  author: true // optional: include commenter details
                }
            },
        },
        where: {
            id
        }
    });
    if(!allComments) return null;
    return allComments;
}