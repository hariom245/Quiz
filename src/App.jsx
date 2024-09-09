import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Quiz from "./Component/Quiz/Quiz"
import Milestone from './Component/Milestone/Milestone'

function App() {
  const [unlockedMilestone, setunlockedMilestone] = useState([1])
  const unlockMilestone = (milestone) => {
    setunlockedMilestone([...unlockedMilestone, milestone]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Milestone unlockedMilestone={unlockedMilestone}/>} />
        <Route exact path="/quiz/:milestoneId" element={<Quiz unlockMilestone={unlockMilestone}/>}/>
      </Routes>
    </Router>
  )
}

export default App
