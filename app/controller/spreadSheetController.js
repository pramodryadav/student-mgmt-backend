import { fetchAndWriteToSheet } from '../services/spreadSheetService.js';

// Controller function to call the service and send the response
export async function updateSpreadsheet(req, res) {
    try {
        const response = await fetchAndWriteToSheet();
        res.status(200).json({ message: 'Spreadsheet updated successfully', data: response });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update spreadsheet', error: error.message });
    }
}
