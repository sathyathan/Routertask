
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-dark">

  <div className="container-fluid">
    <Link to='#'className='brand'>Guvi</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/'>All</Link>
        </li>
        <li className="nav-item">
          <Link to='/Fullstack'>Fullstack</Link>
        </li>
        <li className="nav-item">
        <Link to='/Datascience'>Datascience</Link>
        </li>
        <li className="nav-item">
        <Link to='/Cybersecurity'>Cybersecurity</Link>
        </li>
        <li className="nav-item">
        <Link to='/Career'>Career</Link>
        </li>
        
         </ul>
    </div>
  </div>
</nav>








             
            
        </div>
    );
};

export default Navbar;