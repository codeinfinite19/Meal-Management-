import React from 'react';
import './Navbar.css';
import logo from '../../assets/meal_logo.png';

const Navbar = () => {
    return (
        <div>

            <nav className="navbar">

                <div className='logo'>
                    <img src={logo} alt="" />
                    <h1>Meal Hub</h1>
                </div>

                <div className='right-nav'>
                    <ul>
                        <li>Home</li>
                        <li>Meals</li>
                        <li>Order</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>



                </nav>
            
        </div>
    );
};

export default Navbar;