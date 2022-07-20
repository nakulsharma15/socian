import React from 'react';
import "./Styles/SuggestionBar.css";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../utils/userHandler';
import { handleFollowUnfollow } from '../utils/followUnfollowHandler';

const SuggestionBar = () => {

    const { userList } = useSelector((state) => state.users);
    const { userData, authToken } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const findSuggestions = () => {
        const suggestionList = userList?.filter((item) => {
            const res = userData?.following?.find(
                (user) => item.username === user.username
            );
            if (!res && (item.username !== userData.username)) {
                return item;
            }
        });
        return suggestionList;
    };

    const followHandler = (userId) => {
        handleFollowUnfollow({type:"follow", followUserId: userId},authToken,dispatch)
    }

    useEffect(() => {
        dispatch(getAllUsers());
      }, []);

    return (
        <div className="suggestion-bar">

            <h2 className='suggestion-heading'>Suggested for you</h2>

            {findSuggestions()?.map((user) => <div className='suggestion-div' key={user._id} >
                <div className="suggested-user-div flex-align-center">

                    <div className="suggested-user-img">
                        <img src={user.profileImg} alt={user.username} />
                    </div>
                    <Link to={`/profile/${user.username}`} className='suggested-user-info-div'>
                        <p className='suggested-user-name'>{user.firstName + " " + user.lastName}</p>
                        <p className="suggested-user-username">@{user.username}</p>
                    </Link>

                </div>
                <button className='suggest-follow-btn' onClick={() => followHandler(user._id)}> Follow</button>

            </div>)}


        </div>
    )
}

export default SuggestionBar;