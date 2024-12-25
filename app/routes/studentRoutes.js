// app/routes/studentRoutes.js
import express from 'express';
import { 
    createStudent, 
    updateStudent, 
    getAllStudents,
    deleteStudent,
    getAllStudentsIds } from '../controller/studentController.js';

const router = express.Router();

router.post('/create-student', createStudent);
router.post('/update-student', updateStudent);
router.get('/get-students', getAllStudents);
router.get('/get-students-ids', getAllStudentsIds);
router.post('/delete-student', deleteStudent);


export default router;
