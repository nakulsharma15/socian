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
  const relevantPosts = postList?.filter((post) => {
    const temp = userData.following.find((follower) => follower.username === post.username);
    if(temp)
    return post;
  });
  console.log(postList);
  console.log(relevantPosts);

  useEffect(() => {
    if (postList.length === 0) {
      dispatch(getAllPosts());
    }
  }, []);

  const profileFollowHandler = () => {
    setProfileFollowData(userData.followers);
    setActiveFeed("followers");
  }

  const profileFollowingHandler = () => {
    setProfileFollowData(userData.following);
    setActiveFeed("following");
  }

  const profileFeedHandler = () => {
    setProfileFollowData([]);
    setActiveFeed("posts");
  }

  return (

    <div>

      {/* <EditProfileModal /> */}

      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <ProfileComponent userData={userData} />

          <div className="profile-navigation-div">

            <div className= "profile-navigation-menu" onClick={profileFeedHandler}>
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
                      profileFollowData?.map((user) => <div className='suggestion-div' key={user._id}>
                      <div className="suggested-user-div flex-align-center">
      
                          <div className="suggested-user-img">
                              <img src={user.profileImg} alt={user.username} />
                          </div>
                          <div className='suggested-user-info-div'>
                              <p className='suggested-user-name'>{user.firstName + " " + user.lastName}</p>
                              <p className="suggested-user-username">@{user.username}</p>
                          </div>
      
                      </div>
                      <button className='suggest-follow-btn'> Follow</button>
      
                  </div>)
          }

        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}
