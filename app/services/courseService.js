// app/services/studentFeeService.js
import pool from '../config/db.js';


export const createCourse = async (course) => {
    const { course_name, fee } = course;
    const [result] = await pool.query(
        'INSERT INTO courses (course_name, fee) VALUES (?, ?)',
        [course_name, fee]
    );
    return result;
}

export const updateCourse = async (course) => {
    const { id,course_name, fee } = course;
    const [result] = await pool.query(
        'UPDATE courses SET course_name = ?, fee = ? WHERE id = ?',
        [course_name, fee, id]
    );
    return result;
}

export const deleteCourse = async (courseData) => {
    const { id } = courseData;
    const [result] = await pool.query('DELETE FROM courses WHERE id = ?', [id]);
    return result;
}

export const getAllCourses = async () => {
    const [courses] = await pool.query('SELECT * FROM courses');
    return courses;
}



