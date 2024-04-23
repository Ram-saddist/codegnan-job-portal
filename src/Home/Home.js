import React, { useState, useEffect } from 'react';
import './Home.css';
import cover from '../images/2 c.jpg';
import achievements from '../images/1.webp';
import axios from 'axios';

export default function Home() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch data from the API endpoint when the component mounts
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/refreshdashboard`)
    
      .then(response => {
        // Store the fetched data in the state
        console.log(response.data)
        setDashboardData(response.data);

      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <div style={{ width: '100%' }}>
      {/* Display cover image */}
      <div>
        <img className='codegnan-cover-page' src={cover} alt='cover-page' />
      </div>
      
     

      {/* Render dashboard data */}
      {dashboardData && (
        <div>
          {/* Render dashboard data here */}
        </div>
      )}
    </div>
  );
}
