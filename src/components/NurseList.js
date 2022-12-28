import React from 'react'
import NurseCard from './NurseCard'

const NurseList = ( {nurses} ) => {
  const nurseCards = nurses.map(nurse => <NurseCard key={nurse.id} nurse={nurse}/>)
  return (
    <div>{nurseCards}</div>
  )
}

export default NurseList