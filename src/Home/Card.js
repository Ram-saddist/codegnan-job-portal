import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} style={{aspectRatio:"2/1",width:"90%"}} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
