import React from 'react';
import "./Styles/Styles.css";
import { SideNav, Header, SuggestionBar, PostCard, EditPostModal, CommentCard, CommentInput } from '../Components/index';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from '../utils/postHandler';
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getCommentsOfPost } from "../utils/commentHandler"

export default function SinglePostPage() {

    const dispatch = useDispatch();
    const { postList } = useSelector((store) => store.posts);
    const { comments } = useSelector((state) => state.comments);
    const { isEditPostModalOpen } = useSelector((store) => store.modal);
    const { id } = useParams();
    const requiredPost = postList.find((post) => post._id === id);


    useEffect(() => {
        dispatch(getCommentsOfPost(id));
    }, [id]);


    return (
        <div>
            {isEditPostModalOpen && <EditPostModal />}
            <Header />
            <div className="page-content">

                <SideNav />

                <div className="main-content">
                    {/* 
                    <div className='bookmark-heading-div'>

                        <h2 className='home-heading bookmark-heading'>Explore</h2>
                        <p className='bookmark-sub-heading'>This is explore. Check out posts that are trending even from the people you don't follow</p>
                    </div> */}

                    <PostCard post={requiredPost} />

                    <CommentInput post={requiredPost} />

                    <div className='newest-first-class margin-bottom-class'>

                        {comments?.map((comment) => <CommentCard key={comment.username} comment={comment} />)}

                    </div>
                </div>

                <SuggestionBar />

            </div>

        </div>
    )
}
