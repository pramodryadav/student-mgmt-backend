// app/services/studentService.js
import pool from '../config/db.js';

// Create a new student
export const createStudent = async (studentData) => {
    const { first_name, last_name, email, address, mobileno, remark } = studentData;
    const query = 'INSERT INTO student_info (first_name, last_name, email, address, mobileno, remark) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await pool.query(query, [first_name, last_name, email, address, mobileno, remark]);
    return result.insertId;
};

// Update student details
export const updateStudent = async (studentData) => {
    const { id, first_name, last_name, email, address, mobileno,remark } = studentData;
    const query = 'UPDATE student_info SET first_name = ?, last_name = ?, email = ?, address = ?, mobileno = ?, remark = ? WHERE id = ?';
    const [result] = await pool.query(query, [first_name, last_name, email, address, mobileno,remark, id]);
    return result;
};

// Delete student
export const deleteStudent = async (studentData) => {
    const { id } = studentData;
    const [result] = await pool.query('DELETE FROM student_info WHERE id = ?', [id]);
    return result;
}

// Get all students 
export const getAllStudents = async () => {
    const query = `
        SELECT * from student_info
    `;
    const [students] = await pool.query(query);
    return students;
};

// Get all students ids and name
export const getAllStudentsIds = async () => {
    const query = `
        SELECT 
        id,
        CONCAT(first_name, ' ', last_name) AS name
         from student_info
    `;
    const [students] = await pool.query(query);
    return students;
};
