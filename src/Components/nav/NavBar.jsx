import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
export const NavBar = () => {
    return (

        <div className="navbar">
            <div className="Logo-container">
               <h3>Career Next</h3>
            </div>
            <div className="nav-container">
                <ul>
                    <li><Link to="/" >Home</Link> </li>
                    <li><Link to="/about" >About</Link> </li>
                    <li><Link to="/blog" >Blog</Link> </li>
                    <li><Link to="/contact" >contact</Link> </li>
                </ul>
            </div>
        </div>
  )
}