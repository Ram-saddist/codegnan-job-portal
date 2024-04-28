import React from 'react';
import './Home.css';
import cover from '../images/2 c.jpg';
import CompanyDashboard from './CompanyDashboard';
import BranchDashboard from './BranchDashboard';
import CollegeDashboard from './CollegeDashboard'; // Import the CollegeDashboard component

export default function Home() {
  const dashboardData = {
    "YOP_DICT": {
      "2022.0": 377,
      "2020.0": 363,
      "2021.0": 229,
      "2023.0": 88,
      "2019.0": 25,
      "2024.0": 3,
      "2018.0": 2,
      "NaN": 1
    },
    "COMPANIES": {
      "Mphasis": 292,
      "Bosch Global Technologies Pvt Ltd": 264,
      "Infinite Computers Solutions": 44,
      "Tech Mahindra": 42,
      "Capgemini": 38,
      "Microland": 30,
      "Accenture": 29,
      "TCS": 29,
      "MPHASIS": 26
    },
    "COLLEGES_LIST": {
      "NaN": 138,
      "CIT BANGALORE - CAMBRIDGE INSTITUTE OF TECHNOLOGY - BANGALORE": 21,
      "MVJCE Bengaluru - M.V.Jayaraman College of Engineering - Bengaluru": 18,
      "G Pulliah College of engineering and technology": 14,
      "KS School of Engineering and Management": 13,
      "Don Bosco Institute Of Technology": 12,
      "SVIOT Bangalore - Sai Vidya Institute of Technology - Bangalore": 12,
      "Vemu Institute of technology": 11,
      "R L Jalappa Institute of Technology": 11,
      "KSIT Bangalore - Kammavari Sangha Institute of Technology - Bangalore": 11,
      "PES Institute of Technology and Management": 10
    },
    "BRANCH_LIST": {
      "CSE": 336,
      "NaN": 297,
      "ECE": 269,
      "EEE": 74,
      "ISE": 68,
      "Electronics and Communication Engineering": 50,
      "CS": 23,
      "MCA": 20
    }
  };

  const companiesData = dashboardData.COMPANIES;
  const branchList = dashboardData.BRANCH_LIST;
  const collegesList = dashboardData.COLLEGES_LIST; // Get the colleges list data

  return (
    <div style={{ width: '100%' }}>
      {/* Display cover image */}
      <div>
        <img className='codegnan-cover-page' src={cover} alt='cover-page' />
      </div>
      
      {/* Company Dashboard */}
      <CompanyDashboard companiesData={companiesData} />

      {/* Branch Dashboard */}
      <BranchDashboard branchList={branchList} />

      {/* College Dashboard */}
      <CollegeDashboard collegesList={collegesList} />
    </div>
  );
}
