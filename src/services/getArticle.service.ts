import prisma from "../prisma/client"
export const getArticleService = async (id: number) => {
    const article = prisma.article.findUnique({
        where: {
            id: id
        }
    });
    if(!article) return null;
    return article;
}