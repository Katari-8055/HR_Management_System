import jwt from 'jsonwebtoken';


export const employeeMiddleware = (req, res, next) => {
    try {
       
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_EMP);

        
        req.employee = decoded; 
       
        next();
        
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: 'Invalid token.' });
    }
};
