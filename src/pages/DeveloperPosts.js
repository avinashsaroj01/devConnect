import React from 'react'
import { useLocation } from 'react-router-dom'

function DeveloperPosts() {
    const location = useLocation();
    const data = location.state.Posts;
    console.log('post coming from devdetails page',data);
  return (
    <div>
          {/* to do */}
        <h1> {data.length}</h1>
     
    </div>
  )
}

export default DeveloperPosts