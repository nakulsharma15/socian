import React from 'react';
import "./Styles/SuggestionBar.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../utils/userHandler';

export const SuggestionBar = () => {

    const { userList } = useSelector((state) => state.users);
    const { userData } = useSelector((state) => state.auth);
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

    useEffect(() => {
        dispatch(getAllUsers());
      }, []);

    return (
        <div className="suggestion-bar">

            <h2 className='suggestion-heading'>Suggested for you</h2>

            {findSuggestions()?.map((user) => <div className='suggestion-div' key={user._id}>
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

            </div>)}


        </div>
    )
}
