import React from 'react'
import { useParams } from 'react-router-dom'
import terrainDict from './terrain_dict'




const Post = () => {
    const { id } = useParams()
    
   console.log(id)
  
    const post = terrainDict.filter(customer => customer.id === parseInt(id))
  
    
    
    
    
  return (
    <>
    {post[0].component}
    </>
  )
}

export default Post

