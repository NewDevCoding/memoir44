import React from 'react'

const TroopCard = ({props}) => {
    
    const {name, address} = props;

  return (
    <div className='troop-card-container'>
        <p>{name}</p>
        <p>{address}</p>
    </div>
  )
}

export default TroopCard