import React, {useState, useEffect} from 'react'
import NurseCard from './NurseCard'

const NurseList = () => {
  const [nurses, setNurses] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/nurses")
    .then(response => response.json())
    .then(data => setNurses(data))
  }, []);

  const nurseCards = nurses.map(nurse => <NurseCard key={nurse.id} nurse={nurse}/>)

  return (
    <div>{nurseCards}</div>
  )
}

export default NurseList