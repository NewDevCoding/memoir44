import React from 'react'
import { useParams } from 'react-router-dom'
import TroopCard from './troopCard';
import CustomerData from './customerData';



const Post = () => {
    const { id } = useParams()

    const filteredPost = CustomerData[id]
    const name = filteredPost.name
    const address = filteredPost.address
    console.log(filteredPost)
    
  return (
    <div key={filteredPost[id]}><TroopCard props={filteredPost} /></div>
  )
}

export default Post