// app/routes/feePaymentRoutes.js
import express from 'express';
import {
    createOrUpdateFeePayment,
    updateFeePayment,
    deleteFeePayment,
    listFeePayments,
    listFeePaymentsByEnrolmentId,
    aggregateFeePayments
} from '../controller/feePaymentController.js';
const router = express.Router();

router.post('/create-payment', createOrUpdateFeePayment);
router.post('/update-payment', updateFeePayment);
router.post('/delete-payment', deleteFeePayment);
router.get('/get-payments', listFeePayments);
router.get('/get-aggregate-payments',aggregateFeePayments)
router.get('/get-payment-by-enrollment/:enrollment_id', listFeePaymentsByEnrolmentId);

export default router;
