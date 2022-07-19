import "./Styles/PostCard.css";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTimeDifference } from "../utils/utilFunctions";
import { useNavigate } from "react-router-dom";

export default function CommentCard({ comment }) {

    const navigate = useNavigate();
    const { userData } = useSelector((store) => store.auth);
    const { userList } = useSelector((store) => store.users);
    const dispatch = useDispatch();

    const getProfileImg = (username) => {
        const user = userList.find((item) => item.username === username);
        return user?.profileImg
    }


    return (
        <div className='postcard-div'>

            <div className="comment-header">

                <div className="suggested-user-img">
                    <img src={getProfileImg(comment.username)} alt={comment.username} />
                </div>


                <p className="postcard-info-name">@{comment?.username}</p>



            </div>

            <div className="postcard-content">

                <p>{comment?.text}</p>

            </div>

        </div>
    )
}
