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
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCGPA, setSelectedCGPA] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(''); // State for selected skill filter
  useEffect(() => {
    const fetchAppliedStudents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/getappliedstudentslist?job_id=${jobId}`);
        setAppliedStudents(response.data.students_applied);
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
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/downloadresume?student_id=${studentId}`);
      console.log(response);
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
  // Filter applied students based on selected department, CGPA, and skill
  const filteredStudents = appliedStudents.filter(student => {
    let departmentMatch = true;
    let cgpMatch = true;
    let skillMatch = true;
  
    if (selectedDepartment && student.department !== selectedDepartment) {
      departmentMatch = false;
    }
  
    if (selectedCGPA && parseFloat(student.highestGraduationCGPA) < parseFloat(selectedCGPA)) {
      cgpMatch = false;
    }
  
    if (selectedSkill && student.studentSkills?.includes(selectedSkill)) {
      skillMatch = true;
    } else if (selectedSkill && !student.studentSkills?.includes(selectedSkill)) {
      skillMatch = false;
    }
  
    return departmentMatch && cgpMatch && skillMatch;
  });
  
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
          <option value="ECE">ECE</option>
          <option value="MEC">MEC</option>
          <option value="EIE">EIE</option>
          <option value="MSC">MSC</option>
          <option value="MCA">MCA</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {/* Input for filtering by CGPA */}
      <div>
        <label>Minimum CGPA:</label>
        <input
          type="number"
          value={selectedCGPA}
          placeholder='Enter CGPA'
          onChange={(e) => setSelectedCGPA(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>
      {/* Dropdown menu for selecting a skill */}
      <div>
        <label>Select Skill:</label>
        <select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)}>
          <option value="">All Skills</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="R language">R language</option>
          <option value="Django">Django</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {filteredStudents.length > 0 ? (
            <>
              <ol>
                {filteredStudents.map(student => (
                  <li className='student-jobs-list-card' key={student.student_id}>
                    <p>Name: {student.name}</p>
                    <p>Email: {student.email}</p>
                    <p>
                      <button className='btn-download-single-resume' onClick={() => downloadResume(student.student_id)}>Download Resume</button>
                    </p>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <p>No students have applied for this job.</p>
          )}
        </>
      )}
    </div>
  );
};
export default BDEStudentsAppliedJobsList;