import express from 'express';
import {  updateSpreadsheet} from '../controller/spreadSheetController.js';

const router = express.Router();

// Define the route to update the spreadsheet
router.get('/update', updateSpreadsheet);

export default router;
