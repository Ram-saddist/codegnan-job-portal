import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BDEStudentsAppliedJobsList.css'
import axios from 'axios';

const BDEStudentsAppliedJobsList = () => {
  const { jobId } = useParams();
  console.log(jobId)
  const [appliedStudents, setAppliedStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppliedStudents = async () => {
      try {
        const response = await axios.get(`/api/v1/getappliedstudentslist?job_id=${jobId}`);
        console.log("\n response from jobs list",response.data)
        setAppliedStudents(response.data.students_applied);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch applied students');
        setLoading(false);
      }
    };

    fetchAppliedStudents();
  }, [jobId]);

  return (
    <div className='students-jobs-list'>
      <h2 style={{textAlign:"center"}}>Students Applied for Job</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {appliedStudents.length > 0 ? (
                <ol>
                  {appliedStudents.map(student => (
                    <li className='student-jobs-list-card' key={student.id}>
                      <p>Name: {student.name}</p>
                      <p>Email: {student.email}</p>
                    </li>
                  ))}
                </ol>
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
