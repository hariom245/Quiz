import React, { useCallback, useState } from 'react'
import './Quiz.css'
import { useParams,useNavigate } from 'react-router-dom';
import {data} from "../../asset/data"
import { useRef } from 'react';
function Quiz({unlockMilestone}) {

  const {milestoneId}=useParams();
  const milestone = data.find((m) => m.milestone === parseInt(milestoneId));
  const navigate = useNavigate();
 



  const [progressWidth, setProgressWidth] = useState(0)
const [notification, setnotification] = useState({message:"",visible:false})
let [index, setindex] = useState(0);
let [question, setquestion] = useState(milestone.questions[index]);
const [lock, setlock] = useState(false);
let [score, setscore] = useState(0)
let option1=useRef(null);
let option2=useRef(null);
let option3=useRef(null);
let option4=useRef(null);
let option_Array=[option1,option2,option3,option4]
const [result, setresult] = useState(false)
const checkAns=(e,ans)=>{
  if(lock===false){
    if(question.ans===ans){
      e.target.classList.add("correct");
      setlock(true);
      setscore(score+1);
     
    }
    else{
      e.target.classList.add("wrong");
      setlock(true);
      option_Array[question.ans-1].current.classList.add("correct")
    }
  }
  
}

const next=()=>{
  if(lock===true){
    if(index===milestone.questions.length-1){
      setresult(true);
      return null;
    }
    setindex(++index);
    setquestion(milestone.questions[index]);
    setlock(false);
    option_Array.map((option)=>{
      option.current.classList.remove("wrong")
      option.current.classList.remove("correct")
      return null; 
    })
  }
}



  const handleSubmit=()=>{
    const isPassed= score>=milestone.questions.length /2;
    if(isPassed) {
      const nextMilestone = milestone.milestone + 1;
      unlockMilestone(nextMilestone); // Unlock the next milestone
      showNotification(`Congratulations! You've passed the quiz! Milestone ${nextMilestone} unlocked!`);
    } else {
      alert("Quiz failed, try again!");
      showNotification(`You failed the Quiz , Try again !!!`);
  }

  setTimeout(() => {
    navigate("/");
  }, 3000);
  }

  const showNotification=(message)=>{
    setnotification({message,visible:true});
    setProgressWidth(100);
    const interval = setInterval(() => {
      setProgressWidth((prev) => prev - 1);
    }, 50);

    setTimeout(() => {
      setnotification({message:"",visible :false})
      clearInterval(interval);
    }, 5000);
  }

  return (
    <div className="center-2">
    <div className='container-2'>
      <h1>Quiz</h1>
      <hr />
      {notification.visible && (
        <div className="notification">
          <p>{notification.message}</p>
          <div className="timeline">
            <div className="timeline-progress" style={{ width: `${progressWidth}%` }}></div>
          </div>
        </div>
      )}

      {result?<></>:<>
        <h2>{index+1}. {question.question}</h2>
        
        <ul>
            <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className="index"> 1 out of 5 questions </div></>}
        {result?<>
        <button onClick={handleSubmit}>Check Answer</button>
        </>:<></>}
    </div>
    </div>
  )
}

export default Quiz
