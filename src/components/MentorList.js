import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookSession from './BookSession';

function MentorList() {
    const [mentors, setMentors] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState(null);

    useEffect(() => {
        async function fetchMentors() {
            const result = await axios.get('https://mentor-student-booking-backend.onrender.com/api/mentors');
            setMentors(result.data);
        }
        fetchMentors();
    }, []);

    return (
        <div>
            <h2>Available Mentors</h2>
            <ul>
                {mentors.map(mentor => (
                    <li key={mentor._id}>
                        <strong>{mentor.name}</strong>
                        <button onClick={() => setSelectedMentor(mentor)}>Book a Session</button>
                    </li>
                ))}
            </ul>
            {selectedMentor && <BookSession mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />}
        </div>
    );
}

export default MentorList;
