import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentSignup = () => {
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    city: '',
    state: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    // Name validation
    if (studentData.name.trim().length < 3 || /[^a-zA-Z\s]/.test(studentData.name)) {
      newErrors.name = 'Name must be at least 3 characters long and contain only letters';
      formIsValid = false;
    }

    // Age validation
    if (isNaN(studentData.age) || studentData.age <= 0) {
      newErrors.age = 'Age must be a positive number';
      formIsValid = false;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(studentData.email)) {
      newErrors.email = 'Invalid email address';
      formIsValid = false;
    }

    // Password validation
    if (studentData.password.length < 6 || !/\d/.test(studentData.password)) {
      newErrors.password = 'Password must be at least 6 characters long and contain at least one digit';
      formIsValid = false;
    }

    // City and state validation
    if (studentData.city === '' || studentData.state === '') {
      newErrors.city = 'City and State must be empty';
      formIsValid = false;
    }
    

    if (formIsValid) {
      // Submit the formc
      console.log(studentData)
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users`, studentData)
        .then(response => {
          console.log('Data sent successfully:', response.data);
          if (response.status === 201) {
            navigate('/login');
          }
        })
        .catch(error => {
          console.error('Error sending data:', error);
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Student Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={studentData.name} onChange={handleChange} required />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={studentData.age} onChange={handleChange} required />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={studentData.email} onChange={handleChange} required />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={studentData.password} onChange={handleChange} required />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={studentData.confirmPassword} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="tel" name="mobileNumber" value={studentData.mobileNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={studentData.city} onChange={handleChange} required />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={studentData.state} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentSignup;
