import React from 'react';
import "./Styles/Styles.css";
import { SideNav, CreatePost, Header, SuggestionBar } from '../Components/index';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <h2 className='home-heading'>Home</h2>
          
          <CreatePost />

        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}
