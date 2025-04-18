import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

interface CustomRequest extends Request {
  user?: string;
}

export function verifyToken(req: CustomRequest, res: Response, next: NextFunction): any {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader?.split(' ')[1]; // Bearer <token>

    const token = req.cookies.token;
console.log(token);
    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
        if (err) {
        return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    });
}
