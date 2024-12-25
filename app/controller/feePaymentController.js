// app/controllers/feePaymentController.js
import * as feePaymentService from '../services/feePaymentService.js';


// Create or Update a fee payment
export const createOrUpdateFeePayment = async (req, res) => {
    try {
        const result = await feePaymentService.upsertFeePayment(req.body);
        res.status(200).json({ message: 'Fee payment saved successfully.', result });
    } catch (error) {
        res.status(500).json({ message: 'Error saving fee payment.', error: error.message });
    }
};

// Update a fee payment
export const updateFeePayment = async (req, res) => {
    try {
        const result = await feePaymentService.updateFeePayment(req.body);
        res.status(200).json({ message: 'Fee payment updated successfully.', result });
    } catch (error) {
        res.status(500).json({ message: 'Error updating fee payment.', error: error.message });
    }
};

// Delete a fee payment
export const deleteFeePayment = async (req, res) => {
    try {
        const result = await feePaymentService.deleteFeePayment(req.body);
        res.status(200).json({ message: 'Fee payment deleted successfully.', result });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting fee payment.', error: error.message });
    }
};

// List aggregate fee payments

export const aggregateFeePayments = async (req, res) => {
    try {

        const results = await feePaymentService.listAggregateFeePayments();
        res.status(200).json({ message: "Payments fetched successfully", data: results });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching fee payments.', error: error.message });
    }
}

// List All fee payments
export const listFeePayments = async (req, res) => {
    try {
        const { month } = req.query;
        const results = await feePaymentService.listFeePayments(month);
        res.status(200).json({ message: "Payments fetched successfully", data: results });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching fee payments.', error: error.message });
    }
};

// List fee payments by enrollment id
export const listFeePaymentsByEnrolmentId = async (req, res) => {
    try {
        const enrollment_id = req.params.enrollment_id;
        const results = await feePaymentService.getDetailedPayments(enrollment_id);
        res.status(200).json({ message: "Payments fetched successfully", data: results });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching fee payments.', error: error.message });
    }
};





