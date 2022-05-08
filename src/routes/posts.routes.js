import { Router } from 'express';
import * as PostsController from '../controllers/posts.controller.js';
const router = Router();

router.get('/', PostsController.fetchPosts);

router.get('/recent', PostsController.fetchRecentPosts);

router.post('/', PostsController.createPost);

export default router;