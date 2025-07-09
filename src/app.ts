import express, { Request, Response, NextFunction } from 'express';
import  { HttpError } from 'http-errors';
import logger from './config/logger';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send('Welcome to auth-service!');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        success: false,
        message: err.message,
        type: err.name,
        path: "",
        stack: "",
    });
});

export default app;
