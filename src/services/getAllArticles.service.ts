import prisma from "../prisma/client"
export const getAllArticlesService = async () => {
    const allArticles = prisma.article.findMany();
    if(!allArticles) return null;
    return allArticles;
}