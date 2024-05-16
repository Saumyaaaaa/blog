import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../photos/avatar2.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
    const[avatar,setAvatar]=useState(Avatar)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sgsd`} className="btn">
          My Posts
        </Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            {/* Form to update avatar */}
            <form className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="png,jpg,jpeg"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile__avatar-btn">
              <FaCheck />
            </button>
          </div>
          <h1>Christopher Columbus</h1>
          {/* form to update details */}
          <form className="form profile__form">
            <p className="form__error-message">This is an error message</p>
            <input type="text" placeholder='Tomy Potter' value={name}  onChange={e=>setName(e.target.value)}/>
            <input type="email" placeholder='ram@gmail.com' value={email}  onChange={e=>setEmail(e.target.value)}/>
            <button type='submit' className='btn primary'>Update details</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserProfile