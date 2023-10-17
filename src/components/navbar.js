// create a navbar in this component js file
import React, {useState} from 'react';
import './navbar.css';

const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
            <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="/projects">Projects</a>
                <a className="navbar-brand" href="/about">About</a>
                <a className="navbar-brand" href="/contact">Contact</a>
            </nav>
    );
}

export default Navbar;