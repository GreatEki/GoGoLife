import express from 'express';
import { municipal } from '../controllers/posts';

const router = express.Router();

router.route('/municipal').get(municipal);

export default router;
