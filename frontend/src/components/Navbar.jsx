import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="header">
        <div>
          <h3>
            <Link to="/dashboard">Goals Dashboard</Link>
          </h3>
        </div>

        <ul className="navlinks">
          <li>
            <Link to="/login">
              <FaSignInAlt></FaSignInAlt>
              <span>Login</span>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser></FaUser>
              <span>Register</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="line"></div>
    </>
  );
}

export default Navbar;
