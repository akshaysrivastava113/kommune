import { Request, Response } from 'express';
import { createUser, verifyUser } from '../services/auth.service';

export const signup = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await createUser(email, password);
    (req.session as any).userId = user.id;
    const value = await client.get('key');
    res.status(201).json({message: 'User created'});
};

export const login = async ( req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await verifyUser(email, password);

}