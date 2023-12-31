import express from 'express';
import commentController from '../controllers/comment.controller.js';

const router = express.Router();

router.route('/').get(commentController.getComments);

export default router;
