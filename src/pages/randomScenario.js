import React from 'react'
import './CSSpages/randomScenario.css'

const randomScenario = ({array, onRandomClick }) => {

  const randomItem = () => {
    const random = Math.floor(Math.random() * array.length)
    onRandomClick(random)
  }
  

  return (

    <div className='button'>
        <button onClick={randomItem}>Play a random Scenario!</button>
    </div>
  )
}

export default randomScenario