import React, { useState } from 'react';
import axios from 'axios';

function BookSession({ mentor, onClose }) {
    const [studentName, setStudentName] = useState('');
    const [timestamp, setTimestamp] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://mentor-student-booking-backend.onrender.com/api/bookings', {
                mentorId: mentor._id,
                studentName,
                timestamp
            });
            alert('Session booked successfully!');
            onClose();
        } catch (error) {
            alert('Failed to book session');
        }
    };

    return (
        <div className="modal">
            <h2>Book a Session with {mentor.name}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Name:
                    <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
                </label>
                <label>
                    Preferred Time:
                    <input type="datetime-local" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} required />
                </label>
                <button type="submit">Book</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    );
}

export default BookSession;
