import React from 'react';
import "./Styles/Styles.css";
import { SideNav, Header, SuggestionBar, ProfileComponent, PostCard, EditProfileModal } from '../Components/index';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getAllPosts } from '../utils/postHandler';
import { handleFollowUnfollow } from '../utils/followUnfollowHandler';
import { Link } from 'react-router-dom';

const Profile = () => {

  const [profileFollowData, setProfileFollowData] = useState([]);
  const [isPostFeed, setIsPostFeed] = useState(true);
  const { userData, authToken } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { userList } = useSelector((store) => store.users)
  const { postList } = useSelector((store) => store.posts);
  const { isEditProfileModalOpen } = useSelector((store) => store.modal);
  const relevantPosts = postList?.filter((post) => post.username === userData.username);

  const checkIfAlreadyFollowed = (currentUsername) => {
    return userData?.following.find((user) => user.username === currentUsername)
  }

  const findUserId = (username) => {
    const foundUser = userList.find((user) => user.username === username);
    return foundUser._id
  }

  const UnfollowfollowHandler = (username) => {

    checkIfAlreadyFollowed(username) ?
      handleFollowUnfollow({ type: "unfollow", followUserId: findUserId(username) }, authToken, dispatch) :
      handleFollowUnfollow({ type: "follow", followUserId: findUserId(username) }, authToken, dispatch)

  }

  useEffect(() => {
    if (postList.length === 0) {
      dispatch(getAllPosts());
    }
  }, []);

  const profileFollowHandler = () => {
    setProfileFollowData(userData.followers);
    setIsPostFeed(false);
  }

  const profileFollowingHandler = () => {
    setProfileFollowData(userData.following);
    setIsPostFeed(false);
  }

  const profileFeedHandler = () => {
    setProfileFollowData([]);
    setIsPostFeed(true);
  }

  return (

    <div>

      {isEditProfileModalOpen && <EditProfileModal />}

      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <ProfileComponent userInfo={userData} />

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

          <div className='margin-bottom-class'>


            {isPostFeed ? (relevantPosts?.map((post) => <PostCard post={post} key={post._id} />)) :

              profileFollowData?.map((user) => <div className='suggestion-div' key={user.username}>
                <div className="suggested-user-div flex-align-center">

                  <div className="suggested-user-img">
                    <img src={user.profileImg} alt={user.username} />
                  </div>
                  <Link to={`/profile/${user.username}`} className='suggested-user-info-div'>
                    <p className='suggested-user-name'>{user.firstName + " " + user.lastName}</p>
                    <p className="suggested-user-username">@{user.username}</p>
                  </Link>

                </div>
                <button className='suggest-follow-btn' onClick={() => UnfollowfollowHandler(user.username)}>{checkIfAlreadyFollowed(user.username) ? "Unfollow" : "Follow"}</button>

              </div>)
            }

          </div>
        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}

export default Profile;
