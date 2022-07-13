import React from 'react';
import LoginForm from '../Components/LoginForm';
import "./Styles/Styles.css";

export const Login = () => {
  return (
    <div>
      <div className='login-page-content-div'>

        <div className='auth-page-brand-div'>

          <div className="auth-logo-img">
            <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1657730491/Assets/02012019-20-removebg-preview_gqjanh_dtas4n.png" alt="pp-logo" />
          </div>
          
          <p className='auth-page-brand-text'>Socian helps you connect and share with the people in your life.</p>
        </div>

        <LoginForm />
      </div>

    </div>
  )
}
