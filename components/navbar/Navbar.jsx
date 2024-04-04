'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from "react-icons/md";
import './navbar.css' // Import Link from next/link





const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo d-block d-lg-none p-3">
         <img src="img/logo.png" style={{height:'80px'}} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <MdMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Business</Link>
            </li>
            <li>
              <Link href="/projects">Technology</Link>
            </li>
            <li>
              <Link href="/about">Sports</Link>
            </li>
            <li>
              <Link href="/contact">Politics</Link>
            </li>
            <li>
              <Link href="/contact">Lifestyle</Link>
            </li>
            <li>
              <Link href="/contact">Entertainment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar












