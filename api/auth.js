import jsonwebtoken from 'jsonwebtoken';



export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const user = {
    name: 'admin',
    password: 'admin123'
};

export function tokenValidated(req, res, next) {
    const [, token] = req.headers.authorization ? req.headers.authorization.split(' ') : [null, null];
    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        const payload = jsonwebtoken.verify(token, PRIVATE_KEY);
        const userIdFromToken = typeof payload === String ? payload : payload.userId;

        if(!user || !userIdFromToken) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        req.headers('userId') = userIdFromToken;
        return next();
    }catch (error) {  
        console.error('Erro ao verificar o token:', error);
        return res.status(401).json({ error: 'Token inválido' });
    }
}