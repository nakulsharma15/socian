import React from 'react';
import "./Styles/CreatePost.css";
import { useSelector } from 'react-redux';

export default function CreatePost() {

  const {userData} = useSelector((store) => store.auth);

  return (
    <div>
      <div className='createpost-div'>
        <div className="suggested-user-img">
          <img src={userData?.profileImg} alt={userData?.username} />
        </div>
        <textarea className='createpost-textarea' placeholder="What's happening?"></textarea>
      </div>
      <div className='post-btn-div'>
        <button className='post-btn'>Post</button>
      </div>
    </div>
  )
}
