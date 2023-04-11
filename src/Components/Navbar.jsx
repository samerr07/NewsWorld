import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../News Logo.png"
import "./nav.scss"


const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <img className='img' src={logo} alt="" width={"120px"} height={"110px"} />
            <h1>News</h1><span>World</span>
        </div>
        
        <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/general"}>General</Link>
            <Link to={"/business"}>Business</Link>
            <Link to={"/health"}>Health</Link>
            <Link to={"/science"}>Science</Link>
            <Link to={"/sports"}>Sports</Link>
            <Link to={"/entertainment"}>Entertainment</Link>
            <Link to={"/technology"}>Technology</Link>
        </div>
      
    </div>
  )
}

export default Navbar
