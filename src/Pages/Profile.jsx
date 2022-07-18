import React from 'react';
import "./Styles/Styles.css";
import { SideNav, Header, SuggestionBar, ProfileComponent, PostCard, EditProfileModal } from '../Components/index';
import { useSelector } from "react-redux";

export const Profile = () => {

  const { userData } = useSelector((store) => store.auth);
  console.log(userData);

  return (
    <div>

      {/* <EditProfileModal /> */}

      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <ProfileComponent userData={userData} />

          <div className="profile-navigation-div">

            <div className="profile-navigation-menu">
              <p>Posts</p>
            </div>

            <div className="profile-navigation-menu">
              <p>Followers</p>
            </div>

            <div className="profile-navigation-menu">
              <p>Following</p>
            </div>

          </div>

          <PostCard />

        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}
