// app/controllers/studentController.js
import * as studentService from '../services/studentService.js';

// Controller to handle creating a new student
export const createStudent = async (req, res) => {
    try {
        const studentId = await studentService.createStudent(req.body);
        res.status(201).json({ id: studentId, message: 'Student created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to handle updating student details
export const updateStudent = async (req, res) => {
    try {
        const result = await studentService.updateStudent(req.body);
        res.status(200).json({ message: 'Student updated successfully', data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const result = await studentService.deleteStudent(req.body);
        res.status(200).json({ message: 'Student deleted successfully', data: result });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
}

// Controller to get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json({status:"success",data:students});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all students ids and name
export const getAllStudentsIds = async (req, res) => {
    try {
        const students = await studentService.getAllStudentsIds();
        res.status(200).json({status:"success",data:students});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
