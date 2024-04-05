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
    const [bond, setBond] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [specialNote, setSpecialNote] = useState('');
    const [deadLine, setDeadLine] = useState('');
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
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const addSkill = () => {
        setSkills([...skills, newSkill]);
        setNewSkill('');
    };

    const removeSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };


    const navigate = useNavigate()

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
        if (!companyName) {
            setCompanyNameError('Company name is required');
            isValid = false;
        }

        // Validation for jobRole
        if (!jobRole || jobRole.length < 3) {
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
            setDepartmentError('Department could not be empty.');
            isValid = false;
        }

        // Validation for Percentage
        if (!percentage) {
            setPercentageError('Percentage could not be empty or characters are not allowed.');
            isValid = false;
        }

        // Validation for Technologies
        if (!skills) {
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
                await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/postjobs`, {
                    companyName,
                    jobRole,
                    graduates,
                    salary,
                    educationQualification,
                    department,
                    percentage,
                    bond,
                    jobLocation,
                    specialNote,
                    deadLine,
                    skills
                }).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        alert("Job is added successfully")
                        // Redirect to dashboard or another page
                        navigate('/bdedashboard');
                    }
                })
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
                    <div className="form-group">
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
                        <label>Graduated Year</label>
                        <input
                            type="number" required
                            placeholder="Academic completion Year"
                            value={graduates}
                            onChange={(e) => setGraduates(e.target.value)}
                        />
                        {graduatesError && <p className="error-message">{graduatesError}</p>}
                    </div>
                    <div>
                        <label>Salary</label>
                        <input
                            type="text" required
                            placeholder="Package"
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
                            type="number" required
                            placeholder="Pass Percentage "
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                        />
                        {percentageError && <p className="error-message">{percentageError}</p>}
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

                </div>
                <div className="input-group">
                    <div>
                        <label>Bond</label>
                        <input
                            type="number" required
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
                <div className="input-group">
                    <div>
                        <label htmlFor="skills">Skills:</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            placeholder='Enter your skill'
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                        />
                        {technologiesError && <p className="error-message">{technologiesError}</p>}
                        <button type="button" className="add-skill" onClick={addSkill}>
                            Add Skill
                        </button>
                        <div>
                            <table className="skill-data">
                                <tbody>
                                    {skills.map((skill, index) => (
                                        <tr key={index}>
                                            <td>{skill}</td>
                                            <td>
                                                <button
                                                    className="remove-skill"
                                                    type="button"
                                                    onClick={() => removeSkill(index)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div>
                        <label>Dead Line</label>
                        <input
                            type="text" required
                            placeholder="yyyy-mm-dd hh:mm"
                            value={deadLine}
                            onChange={(e) => setDeadLine(e.target.value)}
                        />

                        {/* {specialNoteError && <p className="error-message">{specialNoteError}</p>} */}
                    </div>
                </div>


                <button className="btn">Add Job</button>
            </form>
        </div>
    )
}

