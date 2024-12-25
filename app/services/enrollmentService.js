import pool from '../config/db.js';


export const createEnrollment = async (enrollment) => {
    const { student_id, course_id, enrollment_date } = enrollment;
    const [result] = await pool.query(
        'INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (?, ?, ?)',
        [student_id, course_id, enrollment_date]
    );
    return result;
}

export const updateEnrollment = async (enrollment) => {
    const { id, student_id, course_id, enrollment_date } = enrollment;
    const [result] = await pool.query(
        'UPDATE enrollments SET student_id = ?, course_id = ?, enrollment_date = ? WHERE id = ?',
        [student_id, course_id, enrollment_date, id]
    );
    return result;
}

export const deleteEnrollment = async (enrollment) => {
    const { id } = enrollment;
    const [result] = await pool.query('DELETE FROM enrollments WHERE id = ?', [id]);
    return result;
}

export const getAllEnrollments = async () => {
    const query = `SELECT 
    enrollments.id,
    enrollments.course_id,
     enrollments.student_id,
    CONCAT(student_info.first_name, ' ', student_info.last_name) AS student_name, 
    courses.course_name,
    DATE_FORMAT(enrollments.enrollment_date, '%Y-%m-%d') AS enrollment_date 
FROM 
    student_info 
INNER JOIN 
    enrollments ON student_info.id = enrollments.student_id 
INNER JOIN 
    courses ON courses.id = enrollments.course_id`
    const [enrollments] = await pool.query(query);
    return enrollments;
}



