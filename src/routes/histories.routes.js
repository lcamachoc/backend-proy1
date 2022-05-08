import { Router } from 'express';
import * as HistoriesController from '../controllers/histories.controller.js';
const router = Router();

router.get ('/:user_id', HistoriesController.fetchHistory);

export default router;