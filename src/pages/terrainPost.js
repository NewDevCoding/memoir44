import React from 'react'
import { useParams } from 'react-router-dom'
import dict from './troop_dict';



const Post = () => {
    const { id } = useParams()
    
   console.log(id) 
  
    const post = dict.filter(customer => customer.id === parseInt(id))
     
    
  return (
    <>
    {post[0].component}
    </>
  )
}

export default Post