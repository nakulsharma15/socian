import React from 'react';
import "./Styles/Styles.css";
import { SideNav, CreatePost, Header, SuggestionBar, PostCard } from '../Components/index';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from '../utils/postHandler';
import { useEffect } from 'react';
import { getAllUsers } from '../utils/userHandler';

export const Home = () => {

  const dispatch = useDispatch();
  const { postList } = useSelector((store) => store.posts);

  console.log(postList);

  useEffect(() => {
    dispatch(getAllUsers());
    if (postList.length === 0) {
      dispatch(getAllPosts());
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="page-content">

        <SideNav />

        <div className="main-content">

          <h2 className='home-heading'>Home</h2>
          
          <CreatePost />

          {postList?.map((post) => <PostCard post={post} key={post._id}/>)}

        </div>

        <SuggestionBar />

      </div>

    </div>
  )
}
