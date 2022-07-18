import React from 'react';
import "./Styles/Styles.css";
import { SideNav, Header, SuggestionBar, ProfileComponent, PostCard, EditProfileModal } from '../Components/index';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getAllPosts } from '../utils/postHandler';

export const Profile = () => {

  const [profileFollowData, setProfileFollowData] = useState([]);
  const { userData } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { postList } = useSelector((store) => store.posts);
  const {isEditProfileModalOpen} = useSelector((store) => store.modal);
  const relevantPosts = postList?.filter((post)=>post.username===userData.username);

  const checkIfAlreadyFollowed = (currentUsername) => {
    return userData?.following.find((item) => item.username === currentUsername)
  }

  useEffect(() => {
    if (postList.length === 0) {
      dispatch(getAllPosts());
    }
  }, []);

  const profileFollowHandler = () => {
    setProfileFollowData(userData.followers);
  }

  const profileFollowingHandler = () => {
    setProfileFollowData(userData.following);
  }

  const profileFeedHandler = () => {
    setProfileFollowData([]);
  }

  return (

    <div>

      { isEditProfileModalOpen && <EditProfileModal /> }

      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <ProfileComponent userData={userData} />

          <div className="profile-navigation-div">

            <div className="profile-navigation-menu" onClick={profileFeedHandler}>
              <p>Posts</p>
            </div>

            <div className="profile-navigation-menu" onClick={profileFollowHandler}>
              <p>Followers</p>
            </div>

            <div className="profile-navigation-menu" onClick={profileFollowingHandler}>
              <p>Following</p>
            </div>

          </div>

          {profileFollowData.length === 0 ? (relevantPosts?.map((post) => <PostCard post={post} key={post._id} />)) :

            profileFollowData?.map((user) => <div className='suggestion-div' key={user.username}>
              <div className="suggested-user-div flex-align-center">

                <div className="suggested-user-img">
                  <img src={user.profileImg} alt={user.username} />
                </div>
                <div className='suggested-user-info-div'>
                  <p className='suggested-user-name'>{user.firstName + " " + user.lastName}</p>
                  <p className="suggested-user-username">@{user.username}</p>
                </div>

              </div>
              <button className='suggest-follow-btn'>{checkIfAlreadyFollowed(user.username) ? "Unfollow" : "Follow"}</button>

            </div>)
          }

        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}
