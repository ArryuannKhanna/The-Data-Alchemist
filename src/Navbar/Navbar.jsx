import React from 'react'
import './Navbar.css'

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
            <p>Home</p>
        </div>
        <div className="Navbar about">
            About
        </div>
        <div className="Navbar my-blog">
            My Blog
        </div>
        <div className="Navbar contact">
            Contact
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