import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div className="navbar-top-punchline">
        <div className="punchline">
        EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </div>
    </div>
    <div className="navbar-top-heading">
        <div className="heading-logo">
        The Data Alchemist
        </div>
    </div>
    <div className="Navbar-container">
        <div className="Navbar home">
            <Link to="/"><p>Home</p></Link>
        </div>
        <div className="Navbar about">
            <Link to="/about">About</Link>
        </div>
        <div className="Navbar my-blog">
            <Link to="/myblog">My Blog</Link>
        </div>
        <div className="Navbar contact">
            <Link to="/contact">Contact</Link>
        </div>
        <div className="Navbar search">

        </div>
        <div className="Navbar social">

        </div>
    </div>
    </>
  )
}

export default Navbar