import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from "../photos/lo.png"
const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile/hwje">Profile</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
        <button className="nav__toggle-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
}

export default Header