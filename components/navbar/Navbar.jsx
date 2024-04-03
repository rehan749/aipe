import React from 'react';
import Link from 'next/link';
import './navbar.css' // Import Link from next/link

function Navbar() {
  return (
    <div className="container-fluid p-0 mb-3">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
        <Link href="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-uppercase"><span className="text-primary">News</span>Room</h1>
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
          <div className="navbar-nav mr-auto py-3">
            <Link href="/login" className="px-3" >Login</Link>
            <Link href="/" className="nav-item nav-link">Home</Link>
            <Link href="/category" className="nav-item nav-link">Categories</Link>
            <Link href="/single" className="nav-item nav-link">Single News</Link>
            <Link href="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <div className="input-group ml-auto" style={{ width: '100%', maxWidth: '300px' }}>
            <input type="text" className="form-control" placeholder="Keyword" />
            <div className="input-group-append">
              <button className="input-group-text text-secondary"><i className="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
