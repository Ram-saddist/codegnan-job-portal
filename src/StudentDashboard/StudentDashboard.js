import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentDashboard.css';

const StudentDashboard = () => {
    // State variables to store job details
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const student_id=localStorage.getItem("student_id")
    // Function to fetch job details from the backend API
    const fetchJobs = async () => {
        try {
            const response = await axios.get('/api/v1/listopenings');
            console.log(response.data)
            setJobs(response.data.jobs);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch job details');
            setLoading(false);
        }
    };
    
    // Fetch job details when the component mounts
    useEffect(() => {
        fetchJobs();
    }, []);
     
    function applyJob(job_id) {
        console.log(job_id)
        axios.post("/api/v1/applyforjob",{job_id,student_id})
            .then((response)=>{
                console.log("response from studentdashboard for apply job",response.data)
            })
    }

    return (
        <div>
            <h2 style={{color:"black",textAlign:"center"}}>Student Dashboard</h2>
            {console.log("jobs from retirn",jobs)}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {jobs.length > 0 && (
                <div className="job-container">
                    {jobs.map(job => (
                        <div key={job.job_id} className="job-card">
                            <h3>{job.companyName}</h3>
                            <p><span className="job-key">Job Role:</span> {job.jobRole}</p>
                            <p><span className="job-key">Salary:</span> {job.salary}</p>
                            <p><span className="job-key">Graduate:</span> {job.graduates}</p>
                            <p><span className="job-key">Education Qualification:</span> {job.educationQualification}</p>
                            <p><span className="job-key">Department:</span> {job.department}</p>
                            <p><span className="job-key">Percentage Criteria:</span> {job.percentage}</p>
                            <p><span className="job-key">Eligible Technologies:</span> {job.technologies}</p>
                            <p><span className="job-key">Bond:</span> {job.bond}</p>
                            <p><span className="job-key">Job Location:</span> {job.jobLocation}</p>
                            <p><span className="job-key">Special Note:</span> {job.specialNote}</p>
                            <button className='apply-job-btn' onClick={() => applyJob(job.job_id)}>Apply</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StudentDashboard;
