import { Request, Response } from 'express';
import { createUser, verifyUser } from '../services/auth.service';
import { createJWTToken } from '../services/jwt.service';

export const signup = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    //Create a new user
    const user = await createUser(email, password);
    const userId = user.id;
    //Check if user is created successfully
    if (!user) {
        return res.status(400).json({message: 'User already exists'});
    }
    //Create JWT token
    const token = createJWTToken(userId);
    if(!token) return res.status(400).json({message: "Could not sign in"});
    
    res.cookie('token', token, {
        httpOnly: true,  // Makes the cookie inaccessible to JavaScript (adds security)
        maxAge: 3600000, // 1 hour
        sameSite: 'strict', // Prevents CSRF attacks by restricting when cookies are sent
    });
    res.status(201).json({token});
};

export const login = async ( req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    const user = await verifyUser(email, password);
    const userId = user?.id;
    //Check if user is created successfully
    if (!user) {
        return res.status(400).json({message: 'Incorrect username/password'});
    }
    //Create JWT token
    const token = createJWTToken(userId);
    if(!token) return res.status(400).json({message: "Could not sign in"});

    res.cookie('token', token, {
        httpOnly: true,  // Makes the cookie inaccessible to JavaScript (adds security)
        maxAge: 3600000, // 1 hour
        sameSite: 'strict', // Prevents CSRF attacks by restricting when cookies are sent
    });
    res.status(201).json({token});
}

export const logout = (req:Request, res: Response) => {
    // res.clearCookie('token', { httpOnly: true, sameSite: 'strict', secure: true });
    res.send({ message: 'Logged out' });
  }