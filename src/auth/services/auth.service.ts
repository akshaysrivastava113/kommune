import bcrypt from "bcrypt";
import prisma from "../../prisma/client";
import { Response } from "express";

export const createUser = async (email: string, password: string) => {
    const userExists = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(userExists) return null;

    const hashed = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data:{
            email,
            password: hashed
        }
    });
}

export const verifyUser = async (email: string, password: string) => {
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    });

    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
    
  };
