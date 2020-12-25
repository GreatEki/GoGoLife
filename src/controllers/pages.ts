import { Request, Response } from 'express';
import { pages } from '../data/pages';

export const getAllPages = (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            data: pages
        });
    } catch (err) {
        return res.status(500).json({
            error: 'Server Error',
            message: err.message
        });
    }
};
