import * as enrollmentService from '../services/enrollmentService.js';


    export const createEnrollment= async (req, res) => {
        try {
            const result = await enrollmentService.createEnrollment(req.body);
            res.status(201).json({ message: 'Enrollment created successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error creating enrollment', error });
        }
    }

    export const updateEnrollment = async (req, res) => {
        try {
            const result = await enrollmentService.updateEnrollment(req.body);
            res.status(200).json({ message: 'Enrollment updated successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error updating enrollment', error });
        }
    }

    export const deleteEnrollment= async (req, res) => {
        try {
            const result = await enrollmentService.deleteEnrollment(req.body);
            res.status(200).json({ message: 'Enrollment deleted successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting enrollment', error });
        }
    }

    export const getAllEnrollments= async (req, res) => {
        try {
            const enrollments = await enrollmentService.getAllEnrollments();
            res.status(200).json({status:"success",data:enrollments});
        } catch (error) {
            res.status(500).json({ message: 'Error fetching enrollments', error });
        }
    }



