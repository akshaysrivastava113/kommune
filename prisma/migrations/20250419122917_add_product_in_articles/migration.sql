-- CreateEnum
CREATE TYPE "Product" AS ENUM ('PRODUCTONE', 'PRODUCTTWO', 'PRODUCTTHREE');

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "product" "Product";
