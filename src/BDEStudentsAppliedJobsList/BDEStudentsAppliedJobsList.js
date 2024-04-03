import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BDEStudentsAppliedJobsList.css';
import axios from 'axios';
import * as XLSX from 'xlsx';

const BDEStudentsAppliedJobsList = () => {
  const { jobId } = useParams();
  const [appliedStudents, setAppliedStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(''); // State to store the selected department

  useEffect(() => {
    const fetchAppliedStudents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/getappliedstudentslist?job_id=${jobId}`);
        setAppliedStudents(response.data.students_applied);
        console.log(response.data.students_applied)
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch applied students');
        setLoading(false);
      }
    };
    fetchAppliedStudents();
  }, [jobId]);

  const downloadResume = async (studentId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/downloadresume?student_id=${studentId}`, {
        responseType: 'blob' // Ensure response is treated as binary data
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `resume_${studentId}.pdf`);
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download resume:', error);
    }
  };

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(appliedStudents);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'applied_students.xlsx');
  };

  // Filter applied students based on selected department
  const filteredStudents = selectedDepartment ? appliedStudents.filter(student => student.department === selectedDepartment) : appliedStudents;

  return (
    <div className='students-jobs-list'>
      <h2 style={{ textAlign: 'center' }}>
        Students Applied for Job
        <button className='btn-excel' onClick={downloadExcel}>Download Excel</button>
      </h2>
      {/* Dropdown menu for selecting department */}
      <div>
        <label>Select Department:</label>
        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">All Departments</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="EEE">EEE</option>
          {/* Add more options as needed */}
        </select>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {filteredStudents.length > 0 ? (
                <>
                  <ol>
                    {filteredStudents.map(student => (
                      <li className='student-jobs-list-card' key={student.student_id}>
                        <p>Name: {student.name}</p>
                        <p>Email: {student.email}</p>
                        <p><button className='btn-download-single-resume' onClick={() => downloadResume(student.student_id)}>Download Resume</button></p>
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p>No students have applied for this job.</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
export default BDEStudentsAppliedJobsList;