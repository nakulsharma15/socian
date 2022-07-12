import React from 'react';
import "./Styles/CreatePost.css";

export default function CreatePost() {

  const url = "https://ik.imagekit.io/avavya/Sonder/nakul_Rs-XDbGCQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729877";

  return (
    <div>
      <div className='createpost-div'>
        <div className="suggested-user-img">
          <img src={url} alt="pp-logo" />
        </div>
        <textarea className='createpost-textarea' placeholder="What's happening?"></textarea>
      </div>
      <div className='post-btn-div'>
        <button className='post-btn'>Post</button>
      </div>
    </div>
  )
}
