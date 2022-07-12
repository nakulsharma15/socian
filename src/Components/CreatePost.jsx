import React from 'react';
import "./Styles/CreatePost.css";

export default function CreatePost() {

  const url = "https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580";

  return (
    <div className='createpost-div'>
      <div className="suggested-user-img">
        <img src={url} alt="pp-logo" />
      </div>
    </div>
  )
}
