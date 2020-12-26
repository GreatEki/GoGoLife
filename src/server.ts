import http from 'http';
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import PostRoutes from './routes/PostRoutes';
import PagesRoutes from './routes/PagesRoutes';

const app: Application = express();

// Create httpServer
const httpServer = http.createServer(app);

// Configure global variables
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

app.use(express.json());

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE ');
    }

    next();
});

app.use('/posts', PostRoutes);
app.use('/pages', PagesRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');

    return res.status(404).json({
        message: error.message
    });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => console.log(`Server running  in ${process.env.NODE_ENV} mode on PORT ${PORT} `));
