import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [subject, setSubject] = useState('Math');
  const [message, setMessage] = useState('');

  // Fetch student list from backend
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const studentData = {
      name: studentName,
      email: studentEmail,
      subject: subject,
    };

    axios.post('http://localhost:5000/students', studentData)
      .then(response => {
        setMessage(response.data.message);
        setStudentName('');
        setStudentEmail('');
        setSubject('Math');
        // Refresh students list after adding a new student
        axios.get('http://localhost:5000/students')
          .then(response => {
            setStudents(response.data);
          })
          .catch(error => {
            console.error('Error fetching students after adding one!', error);
          });
      })
      .catch(error => {
        console.error('There was an error adding the student!', error);
      });
  };

  return (
    <div className="App">
      <h1>Student Class Registration</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>
        </div>
        <button type="submit">Enroll</button>
      </form>

      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.email} - {student.subject}
          </li>
        ))}
      </ul>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
