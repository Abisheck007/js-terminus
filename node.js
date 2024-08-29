// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// MongoDB Model
const AttendanceSchema = new mongoose.Schema({
    studentId: String,
    date: { type: Date, default: Date.now }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/attendanceDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// POST Route to Handle Attendance
app.post('/attendance', async (req, res) => {
    const { studentId } = req.body;
    try {
        await Attendance.create({ studentId });
        res.json({ message: 'Attendance recorded successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error recording attendance' });
    }
});

// GET Route to Retrieve Attendance Data
app.get('/attendance', async (req, res) => {
    try {
        const attendance = await Attendance.find();
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving attendance' });
    }
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
