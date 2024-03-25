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

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(appliedStudents);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'applied_students.xlsx');
  };

  return (
    <div className='students-jobs-list'>
      <h2 style={{ textAlign: 'center' }}>Students Applied for Job</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {appliedStudents.length > 0 ? (
                <>
                  <ol>
                    {appliedStudents.map(student => (
                      <li className='student-jobs-list-card' key={student.id}>
                        <p>Name: {student.name}</p>
                        <p>Email: {student.email}</p>
                        <p></p>
                      </li>
                    ))}
                  </ol>
                  <button onClick={downloadExcel}>Download Excel</button>
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
