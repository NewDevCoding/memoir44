import React from 'react'
import { useParams } from 'react-router-dom'
import TroopCard from './troopCard';
import CustomerData from './customerData';



const Post = () => {
    const { id } = useParams()
    
    const filteredPost = CustomerData.filter(customer => customer.id === parseInt(id))
    
    
  return (
    <div key={filteredPost.id}><TroopCard props={filteredPost[0]} /></div>
  )
}

export default Post

