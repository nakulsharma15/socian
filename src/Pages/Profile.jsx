import React from 'react';
import "./Styles/Styles.css";
import { SideNav, Header, SuggestionBar,ProfileComponent } from '../Components/index';

import { useSelector } from "react-redux";

export const Profile = () => {

  const {userData} = useSelector((store) => store.auth);
 console.log(userData);

  return (
    <div>

      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <ProfileComponent userData={userData}/>

        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}
