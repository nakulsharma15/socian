import React from 'react';
import "./Styles/SuggestionBar.css";
import { NavLink } from "react-router-dom";

export const SuggestionBar = () => {

    const users = [{ name: "Nakul Sharma", username: "nakulsharma15", imageurl: "https://ik.imagekit.io/avavya/Sonder/nakul_Rs-XDbGCQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729877" }, { name: "Sreejith Kumar", username: "srejitk", imageurl: "https://ik.imagekit.io/avavya/Sonder/srejith_iIStFeFSX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451731164" }, { name: "Piyush Das", username: "coldpigli", imageurl: "https://ik.imagekit.io/avavya/Sonder/piyush_eating_q6saDRQSv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654362769580" }, { name: "Tahir Ahmed", username: "ttahm3d", imageurl: "https://ik.imagekit.io/avavya/Sonder/tahir_LHNoEQaM9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654451731406" }];

    return (
        <div className="suggestion-bar">

            <h2 className='suggestion-heading'>Suggested for you</h2>

            {users.map((user) =>  <div className='suggestion-div'>
                <div className="suggested-user-div flex-align-center">

                    <div className="suggested-user-img">
                        <img src={user.imageurl} alt="pp-logo" />
                    </div>
                    <div className='suggested-user-info-div'>
                        <p className='suggested-user-name'>{user.name}</p>
                        <p className="suggested-user-username">@{user.username}</p>
                    </div>

                </div>
                <button className='suggest-follow-btn'> Follow</button>
                
            </div>)}
         
           
        </div>
    )
}
