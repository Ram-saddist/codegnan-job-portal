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
    const [companyNameError, setCompanyNameError] = useState('');
    const [jobRoleError, setJobRoleError] = useState('');
    const [graduatesError, setGraduatesError] = useState('');
    const [salaryError, setSalaryError] = useState('');
    const [educationQualificationError, setEducationQualificationError] = useState('');
    const [departmentError, setDepartmentError] = useState('');
    const [percentageError, setPercentageError] = useState('');
    const [technologiesError, setTechnologiesError] = useState('');
    const [bondError, setBondError] = useState('');
    const [jobLocationError, setJobLocationError] = useState('');
    const [specialNoteError, setSpecialNoteError] = useState('');
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;
        setCompanyNameError('');
        setJobRoleError('');
        setGraduatesError('');
        setSalaryError('');
        setEducationQualificationError('');
        setDepartmentError('');
        setPercentageError('');
        setTechnologiesError('');
        setBondError('');
        setJobLocationError('');
        setSpecialNoteError('');

        // Validation for companyName
          // Validation for companyName
    if (!companyName || !/^[a-zA-Z\s]+$/.test(companyName.trim())) {
        setCompanyNameError('Company name must contain characters only (no special symbols) and spaces.');
        isValid = false;
    }

    // Validation for jobRole
    if (!jobRole || jobRole.length<3) {
        setJobRoleError('Job role is required.');
        isValid = false;
    }

    // Validation for Graduates
    if (!graduates) {
        setGraduatesError('Graduates field must be empty.');
        isValid = false;
    }

    // Validation for Salary
    if (!salary) {
        setSalaryError('Salary field must be empty.');
        isValid = false;
    }

    // Validation for Education Qualification
    if (!educationQualification) {
        setEducationQualificationError('Education qualification field must be empty.');
        isValid = false;
    }

    // Validation for Department
    if (!department) {
        setDepartmentError('Department field must be empty.');
        isValid = false;
    }

    // Validation for Percentage
    if (!percentage) {
        setPercentageError('Percentage field must be empty.');
        isValid = false;
    }

    // Validation for Technologies
    if (!technologies) {
        setTechnologiesError('Technologies field must be empty.');
        isValid = false;
    }

    // Validation for Bond
    if (!bond) {
        setBondError('Bond field must be empty.');
        isValid = false;
    }

    // Validation for Job Location
    if (!jobLocation) {
        setJobLocationError('Job location field must be empty.');
        isValid = false;
    }

    // Validation for Special Note
    if (!specialNote) {
        setSpecialNoteError('Special note field must be empty.');
        isValid = false;
    }
    
        if (isValid) {
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
                }).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        alert("Job is added successfully")
                        // Redirect to dashboard or another page
                        navigate('/bdedashboard');
                    } 
                })
                
                // Redirect to dashboard or another page
                navigate('/bdedashboard');
            } catch (error) {
                console.error('Error:', error);
            }
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
                    {companyNameError && <p className="error-message">{companyNameError}</p>}
                </div>
                <div className="form-group">
                    <label>Job Role</label>
                    <input
                        type="text" required
                        placeholder="role"
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                    />
                    {jobRoleError && <p className="error-message">{jobRoleError}</p>}
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
                    {graduatesError && <p className="error-message">{graduatesError}</p>}
                </div>
                <div>
                    <label>Salary</label>
                    <input
                        type="text" required
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                     {salaryError && <p className="error-message">{salaryError}</p>}
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
                     {educationQualificationError && <p className="error-message">{educationQualificationError}</p>}
                </div>
                <div>
                    <label>Department</label>
                    <input
                        type="text" required
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                     {departmentError && <p className="error-message">{departmentError}</p>}
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
                     {percentageError && <p className="error-message">{percentageError}</p>}
                </div>
                <div>
                    <label>Technologies</label>
                    <input
                        type="text" required
                        placeholder="role"
                        value={technologies}
                        onChange={(e) => setTechnologies(e.target.value)}
                    />
                     {technologiesError && <p className="error-message">{technologiesError}</p>}
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
                     {bondError && <p className="error-message">{bondError}</p>}
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text" required
                        placeholder="Job Location"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                    />
                     {jobLocationError && <p className="error-message">{jobLocationError}</p>}
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
                     {specialNoteError && <p className="error-message">{specialNoteError}</p>}
                </div>
                
                <button className="btn">Add Job</button>
            </form>
        </div>
    )
}

