import React, {useState, useEffect} from 'react'
import NewNurse from './NewNurse';
import NurseCard from './NurseCard'

const NurseList = () => {
  const [nurses, setNurses] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/nurses")
    .then(response => response.json())
    .then(data => setNurses(data))
  }, []);

  const handleNurseSubmit = (e, nurseObj) => {
    e.preventDefault()
    fetch("http://localhost:9292/nurses", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(nurseObj)
    })
    .then(res => res.json())
    .then(data => setNurses([data, ...nurses]))
  }

  const nurseCards = nurses.sort(((a,b) => a.firstname > b.firstname ? 1 : -1)).map(nurse => <NurseCard key={nurse.id} nurse={nurse}/>)

  return (
    <div>
      <NewNurse handleSubmit={handleNurseSubmit}/>
      <div>{nurseCards}</div>
    </div>
  )
}

export default NurseList