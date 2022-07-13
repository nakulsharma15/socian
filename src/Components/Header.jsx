import "./Styles/Header.css"
import React from 'react'

export default function Header() {
    return (
        <div className="header flex-sb">

            <div className="header-logo flex-align-center">

                <div className="header-logo-img">
                    <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1651218268/Assets/0_hfnhg9.png" alt="pp-logo" />
                </div>
                <h1 className="text-xl logo-text">Socian</h1>

            </div>

            <button className="btn primary-btn flex-sb logout-btn"><span className="material-icons-outlined">logout</span>Logout</button>
        </div>
    )
}
