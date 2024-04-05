import React, { useState } from 'react';
import axios from 'axios'
import './StudentSignup.css';
import { useNavigate } from 'react-router-dom';

const StudentSignup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        qualification: '',
        department: '',
        password: '',
        cpassword: '',
        state: "",
        cityname: "",
        yearOfPassing: '',
        collegeName: '',
        tenthStandard: '',
        twelfthStandard: '',
        profilePic: '',
        resume: null,
        highestGraduationPercentage: 0,
    });
    const [skills, setSkills] = useState(['HTML', 'CSS', 'React', 'Python', 'R language', 'Django']);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');

    const addSkill = () => {
        if (currentSkill && !selectedSkills.includes(currentSkill)) {
            setSelectedSkills([...selectedSkills, currentSkill]);
        }
    };
    const removeSkill = (skill) => {
        const updatedSkills = selectedSkills.filter(item => item !== skill);
        setSelectedSkills(updatedSkills);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const fieldName = e.target.name;
        const file = e.target.files[0];

        setFormData({
            ...formData,
            [fieldName]: file,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData)
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const graduationRegex = /^\d*\.?\d*$/
        if (!passwordRegex.test(formData.password)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, and one digit, and be at least 6 characters long');
            return false;
        }

        if (formData.password !== formData.cpassword) {
            alert('Password and Confirm Password do not match');
            return false;
        }
        if (!graduationRegex.test(formData.highestGraduationPercentage)) {
            alert("Highest graduation must be a number");
            return false
        }
        console.log("signup form \n", formData, "\n\n")
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/signup`, {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            cityname: formData.city,
            department: formData.department,
            yearOfPassing: formData.yearOfPassing,
            state: formData.state,
            collegeName: formData.collegeName,
            qualification: formData.qualification,
            mobileNumber: formData.mobileNumber,
            age: formData.age,
            resume: formData.resume,
            profilePic: formData.profilePic,
            tenthStandard: formData.tenthStandard,
            twelfthStandard: formData.twelfthStandard,
            highestGraduationPercentage: formData.highestGraduationPercentage,
            skills: selectedSkills // Include skills field
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((response) => {
                console.log("", response.data)
                console.log("student signup ", response.data)
                alert("Student Signup Successful")
                navigate("/login")
            })
            .catch((error) => {
                console.log("error from tsudent signup", error)
                alert("Unable to make signup due to server issue")
            })
        //console.log(formData);

    };

    return (
        <div className='student-signup-container'>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="input-group">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Full name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='EmailID'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.passowrd}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="cpassword"
                            placeholder='Confirm Password'
                            value={formData.cpassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-group">
                        <label>WhatsApp Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            placeholder='Mobile Number'
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Highest Qualification</label>
                        <input
                            type="text"
                            name="qualification"
                            placeholder='Qualification'
                            value={formData.qualification}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-group">
                        <label>City Name</label>
                        <input
                            type="text"
                            name="cityname"
                            placeholder='City'
                            value={formData.cityname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>You are from which State </label>
                        <input
                            type="text"
                            name="state"
                            placeholder='State'
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-group">
                        <label>Department</label>
                        <input
                            type="text"
                            name="department"
                            placeholder='Which Branch'
                            value={formData.department}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Highest Qualification Year of Passing</label>
                        <input
                            type="text"
                            name="yearOfPassing"
                            placeholder='Year of Passing'
                            value={formData.yearOfPassing}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-group">
                        <label>10th class marks</label>
                        <input
                            type="number"
                            name="tenthStandard"
                            placeholder='10th Grade Percentage'
                            value={formData.tenthStandard}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>12th Standard Marks</label>
                        <input
                            type="number"
                            name="twelfthStandard"
                            placeholder='12th Grade Percentage'
                            value={formData.twelfthStandard}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div className="form-group">
                        <label>Profile Picture</label>
                        <input
                            type="file"
                            name="profilePic"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Resume</label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div className="form-group">
                        <label>College Name</label>
                        <input
                            type="text"
                            name="collegeName"
                            placeholder='Graduated College Name'
                            value={formData.collegeName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Graduation in CGPA</label>
                        <input
                            type="text"
                            name="highestGraduationPercentage"
                            placeholder='Highest Graduation CGPA'
                            value={formData.highestGraduationPercentage}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                {/* sill set*/}
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

                    <button type="button" className='add-skill' onClick={addSkill}>
                        Add Skill
                    </button>
                    <div className='selected-skills'>
                        {selectedSkills.map((skill, index) => (
                            <p key={index}>
                                <span style={{color: 'black'}}>{skill}</span>
                                <button className='remove-skill' type='button' onClick={() => removeSkill(skill)}>X</button>
                            </p>
                        ))}
                    </div>
                </div>
                <button className='btn'>Signup Now</button>
            </form>

        </div>
    );
};

export default StudentSignup;
