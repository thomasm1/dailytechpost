import {   NavLink } from "react-router-dom";
import React from 'react';
// import {   useLocation } from 'react-router-dom';
import { styles } from '../config';

const Header = (  ) => {
    // const location = useLocation(); 
    return (
        <div>  
            <header className="app-header">
                <div className="header-content">
                    <NavLink
                        to="/"
                        className="nav-link"
                        style={({ isActive }) => ({ color: isActive ? 'blue' : 'darkgray' })}
                    >
                        Write!
                    </NavLink>
                    <NavLink
                        to="/posts"
                        className="nav-link"
                        style={({ isActive }) => ({ color: isActive ? 'darkblue' : 'darkgray' })}
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        to="/news"
                        className="nav-link"
                        style={({ isActive }) => ({ color: isActive ? 'blue' : 'darkgray' })}
                    >
                        News by Category
                    </NavLink>
                </div>
                <div className="header-content row">
                    <h6 style={{ color: styles.h6.color }}>DAILYTECH WRITER</h6> </div>
            </header>
        </div>
    );
}

export default Header; 
