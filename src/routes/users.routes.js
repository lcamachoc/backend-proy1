import { Router } from 'express';
import * as UsersController from '../controllers/users.controller.js';
const router = Router();

router.get('/', UsersController.fetchUser);

router.post('/register', UsersController.register);

router.post('/login', UsersController.login);

router.post('/prev-login', UsersController.prevLogin);

export default router;