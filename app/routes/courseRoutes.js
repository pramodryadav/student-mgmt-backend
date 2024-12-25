import express from 'express';
import {createCourse,updateCourse,deleteCourse,getAllCourses} from '../controller/courseController.js';
const router = express.Router();

router.post('/create-course', createCourse);
router.post('/update-course', updateCourse);
router.post('/delete-course', deleteCourse);
router.get('/get-courses', getAllCourses);

export default router;
