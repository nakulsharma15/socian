import React from 'react';
import "./Styles/SideNav.css";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
    return (
        <div className="sidenav-menu">

            <NavLink to="/" className="menu-item">
                <span className="material-symbols-rounded">home</span>
                <p>Home</p>
            </NavLink>

            <NavLink to="/playlist" className="menu-item">
                <span className="material-symbols-outlined">playlist_add</span>
                <p>Playlists</p>
            </NavLink>

            <NavLink to="/liked" className="menu-item">
                <span className="material-symbols-outlined">thumb_up</span>
                <p>Liked videos</p>
            </NavLink>

            <NavLink to="/watchlater" className="menu-item">
                <span className="material-symbols-outlined">schedule</span>
                <p>Watch Later</p>
            </NavLink>

            <NavLink to="/history" className="menu-item">
                <span className="material-symbols-outlined">history</span>
                <p>History</p>
            </NavLink>

        </div>
    )
}
