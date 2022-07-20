import React from 'react';
import { Header } from '../Components';
import { Link } from 'react-router-dom';

export default function NoMatch() {
    return (
        <div>
            <Header />

            <div className="no-match-page-content">

                <div className="no-match-content">

                    <h1>404</h1>
                    <p>The page you're looking for does not exist</p>
                    <Link to="/" className="action-txt">Go to Home</Link>

                </div>

            </div>

        </div>
    )
}
