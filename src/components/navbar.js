// create a navbar in this component js file
import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/projects">Projects</a>
            <a className="navbar-brand" href="/about">About</a>
            <a className="navbar-brand" href="/contact">Contact</a>
        </nav>
    );
}

export default Navbar;