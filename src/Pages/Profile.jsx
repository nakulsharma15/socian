import React from 'react';
import "./Styles/Styles.css";
import { SideNav, CreatePost, Header, SuggestionBar,ProfileComponent } from '../Components/index';

export const Profile = () => {
  return (
    <div>

      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <ProfileComponent />

        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}
