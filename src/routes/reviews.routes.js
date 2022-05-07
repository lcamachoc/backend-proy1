import { Router } from 'express';
import * as ReviewsController from '../controllers/reviews.controller';
const router = Router();

router.get('/', ReviewsController.fetchReviews);

router.post('/', ReviewsController.createReview);

export default router;