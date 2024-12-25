// app/routes/studentFeeRoutes.js
import express from 'express';
import {createEnrollment,updateEnrollment,deleteEnrollment,getAllEnrollments}  from '../controller/enrollmentController.js';
const router = express.Router();

router.post('/create-enrollment', createEnrollment);
router.post('/update-enrollment', updateEnrollment);
router.post('/delete-enrollment', deleteEnrollment);
router.get('/get-enrollments', getAllEnrollments);

export default router;
