// app/index.js
import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import enrollmentRoutes from './routes/enrollmentRoutes.js';
import feePaymentRoutes from './routes/feePaymentRoutes.js';
import spreadSheetRoutes from './routes/spreadSheetRoute.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// User defined routes
app.use('/api/students', studentRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/enroll', enrollmentRoutes);
app.use('/api/fee', feePaymentRoutes);
app.use('/api/spreadsheet',spreadSheetRoutes)

export default app;