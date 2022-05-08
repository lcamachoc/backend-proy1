import { Router } from 'express';
import * as PostsController from '../controllers/posts.controller.js';
const router = Router();

router.get('/', PostsController.fetchUserPosts);

router.get('/recents', PostsController.fetchRecentPosts);

router.get('/', PostsController.fetchPosts);

router.post('/', PostsController.createPost);

export default router;