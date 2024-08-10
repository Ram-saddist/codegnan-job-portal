import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './StudentsList.css';
import axios from 'axios'

export default function StudentsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [studentsList, setStudentsList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const studentsPerPage = 20;

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/allstudents`);
        // console.log(response.data)
        setStudentsList(response.data);
        console.log(response.data.length)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };

  // Filter students by name based on search query
  const filteredStudents = studentsList.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastStudent = page * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalStudents = filteredStudents.length;
  const totalPages = Math.ceil(totalStudents / studentsPerPage);

  return (
    <div className='studentslist-dashboard' style={{marginBottom:"-10px"}}>
      <h2 className='success'>Students List ({studentsList.length})</h2>
      
      {/* Search bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by student name..."
        className='studentslist-search-bar'
      />
      {/* Loading message */}
      {loading ? (
        <p className='loading-message'>Loading...</p>
      ) : (
        <>
          {/* Student list */}
          {totalStudents > 0 ? (
            <div className='table-container'>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>College Name</th>
                    <th>Department</th>
                    <th>Graduation CGPA</th>
                    <th>Skills</th>
                    <th>Year of <br/>Passing</th>
                  </tr>
                </thead>
                <tbody>
                  {currentStudents.map(student => (
                    <tr key={student.id} className='studentslist-item'>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>{student.collegeName}</td>
                      <td>{student.department}</td>
                      <td>{student.highestGraduationCGPA}</td>
                      <td>{student.studentSkills.join(', ')}</td>
                      <td>{student.yearOfPassing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination */}
              <div className='pagination'>
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                  />
                </Stack>
              </div>
            </div>
          ) : (
            <p className='no-results'>No students found.</p>
          )}
        </>
      )}
    </div>
  );
}