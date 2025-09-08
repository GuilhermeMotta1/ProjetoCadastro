import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // pega apenas o token

    if (!token) {
        return res.status(401).json({ message: 'Acesso Negado' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);

        req.userID = decoded.sub; // 'sub' é o id do usuário
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token Inválido' });
    }
};

export default auth;
