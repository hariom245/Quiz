import React from 'react'
import {useNavigate} from 'react-router-dom'
import Quiz from '../Quiz/Quiz'
import  './Milestone.css'
import { data } from '../../asset/data'
function Milestone({unlockedMilestone}) {
    const navigate=useNavigate();
    

    const handleMilestone=(milestone)=>{
        if(unlockedMilestone.includes(milestone))
            navigate(`/quiz/${milestone}`)
     }

     
  return (
    <div className='center'>
    {
        data.map((i)=>(
        <div onClick={()=>handleMilestone(i.milestone)}  className='container'  style={{
          cursor:unlockedMilestone.includes(i.milestone)?"pointer":"not-allowed",
          opacity: unlockedMilestone.includes(i.milestone) ? 1 : 0.5,
        }}>
          <h2>Milestone {i.milestone}</h2>
          {unlockedMilestone.includes(i.milestone)?<p>Unlocked</p>: <p> Locked</p>}
          </div>
        ))
      }
    </div>
  )
}

export default Milestone
