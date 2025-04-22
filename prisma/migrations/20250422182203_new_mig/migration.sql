/*
  Warnings:

  - The values [BLOG,KNOWLEDGEBASE,FORUM] on the enum `ArticleType` will be removed. If these variants are still used in the database, this will fail.
  - The values [PRODUCTONE,PRODUCTTWO,PRODUCTTHREE] on the enum `Product` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ArticleType_new" AS ENUM ('blog', 'knowledgebase', 'forum');
ALTER TABLE "Article" ALTER COLUMN "type" TYPE "ArticleType_new" USING ("type"::text::"ArticleType_new");
ALTER TYPE "ArticleType" RENAME TO "ArticleType_old";
ALTER TYPE "ArticleType_new" RENAME TO "ArticleType";
DROP TYPE "ArticleType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Product_new" AS ENUM ('productone', 'producttwo', 'productthree');
ALTER TABLE "Article" ALTER COLUMN "product" TYPE "Product_new" USING ("product"::text::"Product_new");
ALTER TYPE "Product" RENAME TO "Product_old";
ALTER TYPE "Product_new" RENAME TO "Product";
DROP TYPE "Product_old";
COMMIT;
