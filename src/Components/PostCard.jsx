import "./Styles/PostCard.css";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTimeDifference } from "../utils/utilFunctions";
import { deletePost } from "../utils/postHandler";

export default function PostCard({ post }) {

    const likeCount = post?.likes?.likeCount || 0;
    const likedByList = post?.likes?.likedBy || [];
    const { userData } = useSelector((store) => store.auth);
    const { userList } = useSelector((store) => store.users);
    const dispatch = useDispatch();

    const findPostCreator = (name) => {
        const user = userList?.find((user) => user.username === name);
        return user;
    };

    return (
        <div className='postcard-div'>

            <div className="postcard-header">

                <div className="suggested-user-img">
                    <img src={findPostCreator(post?.username)?.profileImg} alt={post?.username} />
                </div>

                <div>
                    <div className="postcard-info-div">
                        <p className="postcard-info-name">{findPostCreator(post?.username)?.firstName + " " + findPostCreator(post?.username)?.lastName}</p>
                        <p className="postcard-info-username">@{post?.username}</p>
                    </div>

                    <p className="postcard-info-timestamp">{getTimeDifference(post?.createdAt)}</p>
                </div>

            </div>

            <div className="postcard-content">

                <p>{post?.content}</p>

            </div>


            <div className="postcard-action-div">
                <div className="postcard-action">
                    <span className="material-icons-outlined">favorite_border</span>
                    <p>{likeCount}</p>
                </div>

                <div className="postcard-action">
                    <span className="material-icons-outlined">chat_bubble_outline</span>
                    <p>5</p>
                </div>

                <div className="postcard-action">
                    <span className="material-icons-outlined">bookmark_border</span>
                </div>

                {post?.username === userData.username ?
                    <div className="postcard-action">
                        <span className="material-icons-outlined">edit</span>
                    </div>
                    : null}


                {post?.username === userData.username ?
                    <div className="postcard-action">
                        <span className="material-icons-outlined" onClick={() => dispatch(deletePost(post))}>delete</span>
                    </div>
                    : null}

            </div>
        </div>
    )
}
