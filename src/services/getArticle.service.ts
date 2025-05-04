import prisma from "../prisma/client"
export const getArticleService = async (id: number, userId: number) => {
    const article = prisma.article.findUnique({
        include: {
            _count: {
              select: { likes: true } // total number of likes
            },
            likes: {
              where: { userId },      // whether current user liked this article
              select: { id: true }    // any field; we just need to check existence
            }
          },
        where: {
            id: id
        }
    });
    if(!article) return null;
    return article;
}