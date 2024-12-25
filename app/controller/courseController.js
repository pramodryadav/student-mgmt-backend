
// app/controllers/studentController.js
import * as courseService from '../services/courseService.js';


    export const createCourse = async (req, res) => {
        try {
            const result = await courseService.createCourse(req.body);
            res.status(201).json({ message: 'Course created successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error creating course', error });
        }
    }

    export const updateCourse=  async (req, res) => {
        try {
            const result = await courseService.updateCourse(req.body);
            res.status(200).json({ message: 'Course updated successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error updating course', error });
        }
    }

    export const deleteCourse= async (req, res) => {
        try {
            const result = await courseService.deleteCourse(req.body);
            res.status(200).json({ message: 'Course deleted successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting course', error });
        }
    }

    export const getAllCourses= async (req, res) => {
        try {
            const courses = await courseService.getAllCourses();
            res.status(200).json({status:"success",data:courses});
        } catch (error) {
            res.status(500).json({ message: 'Error fetching courses', error });
        }
    }



