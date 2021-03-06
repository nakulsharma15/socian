import "./Styles/PostCard.css";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTimeDifference } from "../utils/utilFunctions";
import { deletePost, likeOrDislikePost, bookmarkHandler } from "../utils/postHandler";
import { checkUserInteraction, checkIfBookmarked } from "../utils/utilFunctions";
import { openEditPostModal } from "../Redux/slices/modalSlice";
import { useNavigate, Link } from "react-router-dom";

export default function PostCard({ post }) {

    const navigate = useNavigate();
    const likeCount = post?.likes?.likeCount || 0;
    const likedByList = post?.likes?.likedBy || [];
    const { userData } = useSelector((store) => store.auth);
    const { userList } = useSelector((store) => store.users);
    const dispatch = useDispatch();

    const findPostCreator = (name) => {
        const user = userList?.find((user) => user.username === name);
        return user;
    };

    const likeHandler = () => {
        checkUserInteraction(likedByList, userData.username)
            ? dispatch(likeOrDislikePost({ type: "dislike", _id: post?._id }))
            : dispatch(likeOrDislikePost({ type: "like", _id: post?._id }));

    }

    const handleBookmark = () => {

        checkIfBookmarked(userData?.bookmarks, post)
            ? dispatch(bookmarkHandler({ type: "remove-bookmark", _id: post?._id }))
            : dispatch(bookmarkHandler({ type: "bookmark", _id: post?._id }));

    }

    return (
        <div className='postcard-div'>

            <div className="postcard-header">

                <div className="suggested-user-img">
                    <img src={findPostCreator(post?.username)?.profileImg} alt={post?.username} />
                </div>

                <div>
                    <Link to={post?.username === userData.username ? `/profile` : `/profile/${post?.username}`} className="postcard-info-div">
                        <p className="postcard-info-name">{findPostCreator(post?.username)?.firstName + " " + findPostCreator(post?.username)?.lastName}</p>
                        <p className="postcard-info-username">@{post?.username}</p>
                    </Link>

                    <p className="postcard-info-timestamp">{getTimeDifference(post?.createdAt)}</p>
                </div>

            </div>

            <div className="postcard-content">

                <p>{post?.content}</p>

            </div>


            <div className="postcard-action-div">
                <div className="postcard-action" onClick={likeHandler}>

                    {checkUserInteraction(likedByList, userData.username) ? <span className="material-icons-outlined liked">favorite</span> : <span className="material-icons-outlined">favorite_border</span>}

                    <p className={checkUserInteraction(likedByList, userData.username) ? "liked" : ""}>{likeCount}</p>

                </div>

                <div className="postcard-action" onClick={() => {
                    navigate(`/post/${post?._id}`)
                }}>
                    <span className="material-icons-outlined">chat_bubble_outline</span>
                    <p>{post?.comments?.length}</p>
                </div>

                <div className="postcard-action" onClick={handleBookmark}>
                    {checkIfBookmarked(userData?.bookmarks, post) ? <span className="material-icons-outlined bookmarked">bookmark</span> : <span className="material-icons-outlined">bookmark_border</span>}
                </div>

                {post?.username === userData.username ?
                    <div className="postcard-action" onClick={() => dispatch(openEditPostModal({ post }))}>
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
