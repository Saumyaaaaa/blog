import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../photos/avatar1.jpg'
const PostAuthor = () => {
  return (
   <Link to={`/posts/users/dfs`} className='post__author'>
    <div className="post__author-avatar">
        <img src={Avatar} alt="" />
    </div>
    <div className="post__author-details">
        <h5>By: Saumya Neupane</h5>
        <small>Just Now</small>
    </div>
   </Link>
  )
}

export default PostAuthor