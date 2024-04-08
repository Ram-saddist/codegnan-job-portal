import React, { useState } from 'react'
import axios from 'axios'
import './AddJob.css'
import Swal from 'sweetalert2'
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
    // eslint-disable-next-line
    const [skills, setSkills] = useState(['HTML', 'CSS', 'React', 'Python', 'R language', 'Django']);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);


    const addSkill = () => {
        if (currentSkill && !selectedSkills.includes(currentSkill)) {
            setSelectedSkills([...selectedSkills, currentSkill]);
        }
    };
    const removeSkill = (skill) => {
        const updatedSkills = selectedSkills.filter(item => item !== skill);
        setSelectedSkills(updatedSkills);
    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log(selectedSkills)
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

        if (!companyName) {
            setCompanyNameError('Company name is required');
            isValid = false;
        }

        if (!jobRole || jobRole.length < 3) {
            setJobRoleError('Job role is required.');
            isValid = false;
        }
        if (!graduates) {
            setGraduatesError('Graduates field must be empty.');
            isValid = false;
        }
        if (!salary) {
            setSalaryError('Salary field must be empty.');
            isValid = false;
        }
        if (!educationQualification) {
            setEducationQualificationError('Education qualification field must be empty.');
            isValid = false;
        }
        if (!department) {
            setDepartmentError('Department could not be empty.');
            isValid = false;
        }
        if (!percentage) {
            setPercentageError('Percentage could not be empty');
            isValid = false;
        }
        if (!skills) {
            setTechnologiesError('Technologies field must be empty.');
            isValid = false;
        }
        if (!bond) {
            setBondError('Bond field must be empty.');
            isValid = false;
        }
        if (!jobLocation) {
            setJobLocationError('Job location field must be empty.');
            isValid = false;
        }
        if (!specialNote) {
            setSpecialNoteError('Special note field must be empty.');
            isValid = false;
        }
        if (!deadLine) {
            alert("Deadline field is required")
            isValid = false
        }
        if (!buttonClicked && isValid) {
            setButtonClicked(true); 
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
                    selectedSkills
                }).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        Swal.fire({
                            title: "Job added successfully!",
                            icon: "success"
                          });
                        // Redirect to dashboard or another page
                        navigate('/bdedashboard');
                    }
                })
            } catch (error) {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!!!",
                    text: "Please check the fields again"
                  });
            }finally {
                setButtonClicked(false); // Re-enable the button after the action completes
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
                            type="text" required
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
                        <label>Dead Line</label>
                        <input
                            type="text" required
                            placeholder="yyyy-mm-dd hh:mm"
                            value={deadLine}
                            onChange={(e) => setDeadLine(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="skills">Skills:</label>
                        <select
                            id="skills"
                            name="skills"
                            value={currentSkill}
                            onChange={(e) => setCurrentSkill(e.target.value)}
                        >
                            <option value="">Select a skill</option>
                            {skills.map((skill, index) => (
                                <option key={index} value={skill}>{skill}</option>
                            ))}
                        </select>
                        {technologiesError && <p className="error-message">{technologiesError}</p>}
                        <button type="button" className='add-skill' onClick={addSkill}>
                            Add Skill
                        </button>
                        <div className='selected-skills'>
                            {selectedSkills.map((skill, index) => (
                                <p style={{ color: 'black' }} key={index}>
                                    {skill}
                                    <button className='remove-skill' type='button' onClick={() => removeSkill(skill)}>X</button>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <button disabled={buttonClicked} className="btn">Add Job</button>
            </form>
        </div>
    )
}

