import bcrypt from "bcrypt";
import prisma from "../../prisma/client";

export const createUser = async (email: string, password: string) => {
    const hashed = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data:{
            email,
            password: hashed
        }
    });
  }