import React from 'react';
import './BranchDashboard.css'; 

export default function BranchDashboard({ branchList }) {
  return (
    <div className='branch-dashboard'>
      <h2 className='title'>Branch Dashboard</h2>
      <ul className='branch-list'>
        {Object.entries(branchList).map(([branch, count]) => (
          <li key={branch} className='branch-item'>
            <span className='branch-name'>{branch}:{count} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
