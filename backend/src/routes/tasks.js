import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  addComment
} from '../controllers/taskController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.post('/:projectId', createTask);
router.get('/:projectId', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.post('/:id/comments', addComment);

export default router;
