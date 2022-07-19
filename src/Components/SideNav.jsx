import React from 'react';
import "./Styles/SideNav.css";
import { NavLink } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="sidenav-menu">

            <NavLink to="/" className="menu-item">
                <span className="material-symbols-rounded">home</span>
                <p>Home</p>
            </NavLink>

            <NavLink to="/explore" className="menu-item">
            <span className="material-icons-outlined">explore</span>
                <p>Explore</p>
            </NavLink>

            <NavLink to="/bookmarks" className="menu-item">
            <span className="material-icons-outlined">bookmark_border</span>
                <p>Bookmarks</p>
            </NavLink>

            <NavLink to="/profile" className="menu-item">
            <span className="material-icons-outlined">person</span>
                <p>Profile</p>
            </NavLink>

        </div>
    )
}

export default SideNav;
