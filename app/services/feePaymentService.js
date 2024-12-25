import pool from '../config/db.js';



// Create or Update a fee payment
export const upsertFeePayment = async (data) => {
    const query = `
        INSERT INTO fee_payments (enrollment_id, year, month, amount, payment_date)
        VALUES (?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            amount = VALUES(amount),
            payment_date = VALUES(payment_date);
    `;
    const { enrollment_id, year, month, amount, payment_date } = data;
    const result = await pool.query(query, [enrollment_id, year, month, amount, payment_date]);
    return result;
};

// Update fee payment
export const updateFeePayment = async (data) => {
    const query = `
        UPDATE fee_payments
        SET amount = ?, payment_date = ?
        WHERE id = ?;
    `;
    const { id, amount, payment_date } = data;
    const result = await pool.query(query, [amount, payment_date, id]);
    return result;
};

// Delete a fee payment
export const deleteFeePayment = async ({ id }) => {
   
    const query = `
        DELETE FROM fee_payments
        WHERE id = ?;
    `;
    const result = await pool.query(query, [id]);
    return result;
};


// List Aggregate fee payments
export const listAggregateFeePayments = async () => {
    const query = `
    SELECT 
        enrollments.id AS enrollment_id,
        CONCAT(student_info.first_name, ' ', student_info.last_name) AS student_name,
        courses.course_name,
        IFNULL(SUM(fee_payments.amount), 0) AS total_paid
    FROM 
        enrollments
    INNER JOIN 
        student_info ON enrollments.student_id = student_info.id
    INNER JOIN 
        courses ON enrollments.course_id = courses.id
    LEFT JOIN 
        fee_payments ON fee_payments.enrollment_id = enrollments.id
    GROUP BY 
        enrollments.id, 
        student_info.id, 
        courses.id;
    `;
    
    const [results] = await pool.query(query);
    return results;
};


export const listFeePayments = async (month = null) => {
    let query = `
    SELECT 
        fee_payments.id AS payment_id,
        CONCAT(student_info.first_name, ' ', student_info.last_name) AS student_name,
        student_info.remark,
        fee_payments.year,
        fee_payments.month,
        fee_payments.amount,
        DATE_FORMAT(fee_payments.payment_date, '%Y-%m-%d') AS payment_date
    FROM 
        enrollments
    INNER JOIN 
        student_info ON enrollments.student_id = student_info.id
    INNER JOIN 
        fee_payments ON fee_payments.enrollment_id = enrollments.id
    `;

    if (month) {
        query += ` WHERE fee_payments.month = ?`;
    }
    
    const [results] = await pool.query(query, month ? [month] : []);
    return results;
};




export const getDetailedPayments = async (enrollmentId) => {
    const query = `
        SELECT 
            id,
            enrollment_id,
            year,
            month,
            DATE_FORMAT(payment_date, '%Y-%m-%d') AS payment_date,
            amount
        FROM 
            fee_payments
        WHERE 
            enrollment_id = ?
        ORDER BY 
            FIELD(month, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    `;

    const [results] = await pool.query(query, [enrollmentId]);
    return results;
};







