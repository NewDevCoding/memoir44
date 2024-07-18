import React from 'react'
import { useParams } from 'react-router-dom'
import TroopCard from './troopCard';
import CustomerData from './customerData';
import dict from './troop_dict';
// import Test2 from './Test2';



const Post = () => {
    const { id } = useParams()
    
   console.log(id)
  
    const post = dict.filter(customer => customer.id === parseInt(id))
  
    
    const filteredPost = CustomerData.filter(customer => customer.id === parseInt(id))
    
    
  return (
    // <div key={filteredPost.id}><TroopCard props={filteredPost[0]} /></div>
    <>
    {post[0].component}
    </>
  )
}

export default Post

