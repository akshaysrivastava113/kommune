var jwt = require('jsonwebtoken');

export const createJWTToken = (userId: number | undefined) =>  {
    if(!userId) return null;

    const token = jwt.sign({
        userId,
    }, process.env.JWT_SECRET,  { expiresIn: '1h' });
    
    if(!token) return null;
    return token;
}