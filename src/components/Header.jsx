import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa"; // Assuming you're using FaBars for the menu icon

import Logo from "../photos/lo.png";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeHandler}>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        {isNavShowing && (
          <ul className={`nav__menu ${isNavShowing ? "show" : ""}`}>
            <li>
              <Link to="/profile/hwje" onClick={closeHandler}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeHandler}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeHandler}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeHandler}>
                Contacts
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
