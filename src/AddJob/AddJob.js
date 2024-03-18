import React, { useState } from 'react'
import axios from 'axios'
import './AddJob.css'
import { useNavigate } from 'react-router-dom';

export default function AddJob() {
    const [companyName, setCompanyName] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [graduates, setGraduates] = useState('');
    const [salary, setSalary] = useState('');
    const [educationQualification, setEducationQualification] = useState('');
    const [department, setDepartment] = useState('');
    const [percentage, setPercentage] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [bond, setBond] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [specialNote, setSpecialNote] = useState('');
    const navigate= useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/v1/postjobs', {
                companyName,
                jobRole,
                graduates,
                salary,
                educationQualification,
                department,
                percentage,
                technologies,
                bond,
                jobLocation,
                specialNote
            })
                .then((response)=>{
                    console.log("response from addjob",response.data)
                })
            
            // Reset form fields after successful submission
            navigate("/bdedashboard")
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className='apply-job-container'>
            <form onSubmit={handleSubmit}>
                <h2 className='job-page-title'>Job Description</h2>
                <div className="input-group">
                <div  className="form-group">
                    <label>Company Name</label>
                    <input
                        type="text" required
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Job Role</label>
                    <input
                        type="text" required
                        placeholder="role"
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                    />
                </div>
                </div>
               <div className='input-group'>
               <div>
                    <label>Graduates</label>
                    <input
                        type="text" required
                        placeholder="Graduation Information"
                        value={graduates}
                        onChange={(e) => setGraduates(e.target.value)}
                    />
                </div>
                <div>
                    <label>Salary</label>
                    <input
                        type="text" required
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>
               </div>
               <div className="input-group">
                <div>
                    <label>Education Qualification</label>
                    <input
                        type="text" required
                        placeholder="Education Qualification"
                        value={educationQualification}
                        onChange={(e) => setEducationQualification(e.target.value)}
                    />
                </div>
                <div>
                    <label>Department</label>
                    <input
                        type="text" required
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>
                </div>
                <div className="input-group">
                <div>
                    <label>Academic Percentage</label>
                    <input
                        type="text" required
                        placeholder="Pass Percentage "
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                    />
                </div>
                <div>
                    <label>Technologies</label>
                    <input
                        type="text" required
                        placeholder="role"
                        value={technologies}
                        onChange={(e) => setTechnologies(e.target.value)}
                    />
                </div>
                </div>
                <div className="input-group">
                <div>
                    <label>Bond</label>
                    <input
                        type="text" required
                        placeholder="bond"
                        value={bond}
                        onChange={(e) => setBond(e.target.value)}
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text" required
                        placeholder="Job Location"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                    />
                </div>
                </div>
               
                <div>
                    <label>Special Note</label>
                    <input
                        type="text" required
                        placeholder="Note Points"
                        value={specialNote}
                        onChange={(e) => setSpecialNote(e.target.value)}
                    />
                </div>
                
                <button className="btn">Add Job</button>
            </form>
        </div>
    )
}

