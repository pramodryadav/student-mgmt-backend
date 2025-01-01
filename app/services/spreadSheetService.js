import { google } from 'googleapis';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { dirname, join } from "path";
import pool from '../config/db.js';
import { response } from 'express';
// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
// Get the directory name
const __dirname = dirname(__filename);



dotenv.config();  // Load environment variables



//const credentials = JSON.parse(fs.readFileSync(join(__dirname, '../credentials.json')));




// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
   // credentials,  // The downloaded service account key file
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});




// Service function to fetch data and write to Google Sheets
export async function fetchAndWriteToSheet() {
    try {
        // Query student details and payment info
        const [rows] = await pool.query(
            `SELECT 
                CONCAT(student_info.first_name, ' ', student_info.last_name) AS Name,
                student_info.mobileno, 
                DATE_FORMAT(fee_payments.payment_date, '%Y-%m-%d') AS payment_date,
                fee_payments.month,
                fee_payments.amount
            FROM student_info
            INNER JOIN enrollments ON student_info.id = enrollments.student_id
            INNER JOIN fee_payments ON fee_payments.enrollment_id = enrollments.id;
            `
        );


        // Prepare data to be inserted into the sheet
        const values = rows.map(row => [
            row.Name,
            row.mobileno,
            row.payment_date,
            row.month,
            row.amount
        ]);

        // Initialize Sheets API
        const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() });
        const headerRow = ['Name', 'Mobile', 'Payment Date', 'Month', 'Amount'];
        values.unshift(headerRow);

        // Write to Google Sheets
        sheets.spreadsheets.values.update({
            spreadsheetId: process.env.SPREADSHEET_ID,  // Your spreadsheet ID
            range: 'Sheet1!A1',  // Define the starting cell
            valueInputOption: 'RAW',
            resource: {
                values
            },
        });



        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Handle error in the controller
    }
}
