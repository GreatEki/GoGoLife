import express from 'express';
import { getAllPages } from '../controllers/pages';

const router = express.Router();

router.route('/').get(getAllPages);

export default router;
