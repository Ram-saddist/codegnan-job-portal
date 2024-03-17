import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BDEDashboard.css'

const BDEDashboard = () => {
    // State variables to store job details
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Function to fetch job details from the backend API
    const fetchJobs = async () => {
        try {
            const response = await axios.get('/backend-api-route');
            setJobs(response.data);
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

    return (
        <div>
            <h2>BDE Dashboard</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {jobs.length > 0 && (
                <ul>
                    {jobs.map(job => (
                        <li key={job.id}>
                            <h3>{job.companyName}</h3>
                            <p>Job Role: {job.jobRole}</p>
                            <p>Salary: {job.salary}</p>
                            <p>Graduate:{job.graduates}</p>
                            <p>Education Qualification:{job.educationQualification}</p>
                            <p>Department:{job.department}</p>
                            <p>Percentage Criteria:{job.percentage}</p>
                            <p>Eligible Technologies:{job.technologies}</p>
                            <p>Bond:{job.bond}</p>
                            <p>Job Location:{job.jobLocation}</p>
                            <p>Special Note:{job.specialNote}</p>
                            {/* Render other job details here */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BDEDashboard;
