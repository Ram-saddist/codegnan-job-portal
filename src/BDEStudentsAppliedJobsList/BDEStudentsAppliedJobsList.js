import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BDEStudentsAppliedJobsList.css';
import axios from 'axios';
import Swal from 'sweetalert2'
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
        console.log(response.data.students_applied)
        setAppliedStudents(response.data.students_applied);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch applied students');
        setLoading(false);
      }
    };
    fetchAppliedStudents();
  }, [jobId]);
  
  const downloadResume = async () => {
    try {
      const selectedStudentIds = filteredStudents.map(student => student.student_id);
      console.log(selectedStudentIds, jobId)
      // Call your backend API with selectedStudentIds
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/downloadresume`, {
        selected_student_ids: selectedStudentIds
      }, {
        responseType: 'blob' // Set responseType to blob
      });
      console.log('Selected students accepted:', response.data); 
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resumes.zip'); // Set the filename for download
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download resumes:', error);
    }
  };
  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(appliedStudents);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'applied_students.xlsx');
  };
  //accepting students 

  const acceptSelectedStudents = async () => {
    // Display a confirmation dialog using SweetAlert
    const result = await Swal.fire({
      title: 'Confirm Acceptance',
      text: 'Are you sure you want to reject the remaining students?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel'
    });

    // If the user confirms, send the selected student IDs to the backend API
    if (result.isConfirmed) {

      try {
        const selectedStudentIds = filteredStudents.map(student => student.student_id);
        console.log(selectedStudentIds, jobId)
        // Call your backend API with selectedStudentIds
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/updatejobapplicants`, {
          selected_student_ids: selectedStudentIds, job_id: jobId
        });
        console.log('Selected students accepted:', response.data);
        console.log(response)
        if (response.status === 200) {
          Swal.fire({
            title: "Accecpted these selected students",
            icon: "success"
          });
        }
        // Optionally, you can perform any additional actions after accepting the students, such as updating UI or showing a success message.
      } catch (error) {
        console.error('Failed to accept selected students:', error);
      }
    }
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
        <div className='btn-parent'>
          <button className='btn-excel' onClick={downloadExcel}>Download Excel</button>
          <button className='resume-download' onClick={downloadResume}>Get the Resumes</button>
          <button onClick={acceptSelectedStudents} className='btn-accept-job-students'>Accept the selected students </button>
        </div>
      </h2>
      <div className='filter-list'>
        <div>
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
          </select>
        </div>
        <div>
          <select
            className='cgpa'
            value={selectedCGPA}
            onChange={(e) => setSelectedCGPA(e.target.value)}
          >
            <option value="">Minimum CGPA</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        {/* Dropdown menu for selecting a skill */}
        <div>
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