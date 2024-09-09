import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Milestone.css';
import { data } from '../../asset/data';

function Milestone({ unlockedMilestone }) {
  const navigate = useNavigate();

  const handleMilestone = (milestone) => {
    if (unlockedMilestone.includes(milestone)) {
      navigate(`/quiz/${milestone}`);
    }
  };

  return (
    <div className='center'>
      {data.map((i) => (
        <div key={i.milestone} className='container'>
          <h2>Milestone {i.milestone}</h2>
          <p>{unlockedMilestone.includes(i.milestone) ? 'Unlocked' : 'Locked'}</p>
          <button
            onClick={() => handleMilestone(i.milestone)}
            disabled={!unlockedMilestone.includes(i.milestone)}
            className='milestone-btn'
          >
            {unlockedMilestone.includes(i.milestone) ? 'Start Quiz' : 'Locked'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Milestone;
