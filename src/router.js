import express from 'express';
import {home} from './modules/home';

const router = express.Router();

router.get('/', home);

export default router;
