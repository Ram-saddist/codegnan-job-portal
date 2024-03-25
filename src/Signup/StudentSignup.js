import React, { useState } from 'react';
import axios from 'axios'
import './StudentSignup.css';
import { useNavigate,Link } from 'react-router-dom';

const StudentSignup = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        qualification: '',
        department: '',
        password:'',
        cpassword:'',
        state:"",
        cityname:"",
        yearOfPassing: '',
        collegeName: '',
        // resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleFileChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         resume: e.target.files[0],
    //     });
    // };




    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/signup`,{name:formData.name,email:formData.email,password:formData.password,city:formData.city,department:formData.department,yearOfPassing:formData.yearOfPassing,state:formData.state,collegeName:formData.collegeName,qualification:formData.qualification,mobileNumber:formData.mobileNumber,age:formData.age})
            .then((response)=>{
                console.log("",response.data)
                console.log("student signup ",response.data)
                navigate("/login")
            })
            .catch((error)=>{
                console.log("error from tsudent signup",error)
                alert(error.response.data.error)
            })
        console.log(formData);
    
    };

    return (
        <div className='student-signup-container'>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name of the Student'
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
                            placeholder='Working EmailID'
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
                        <label>College Name</label>
                        <input
                            type="text"
                            name="collegeName"
                            placeholder='College Name'
                            value={formData.collegeName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>Resume</label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleFileChange}
                            required
                        />
                    </div> */}
                </div>
                <button className='btn'>SignUp Now</button>
            </form>

        </div>
    );
};

export default StudentSignup;
