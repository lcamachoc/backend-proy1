import { Router } from 'express';
import * as CartsController from '../controllers/carts.controller';
const router = Router();

router.get('/', CartsController.fetchCart);

router.post('/', CartsController.addToCart);

router.post('/buy', CartsController.buyCart);

router.delete('/', CartsController.removeFromCart);

export default router;