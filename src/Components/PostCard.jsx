import "./Styles/PostCard.css";
import React from 'react';

export default function PostCard() {
    return (
        <div className='postcard-div'>

            <div className="postcard-header">

                <div className="suggested-user-img">
                    <img src="https://ik.imagekit.io/avavya/Sonder/nakul_Rs-XDbGCQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729877" alt="pp-logo" />
                </div>

                <div>
                    <div className="postcard-info-div">
                        <p className="postcard-info-name">Nakul Sharma</p>
                        <p className="postcard-info-username">@nakulsharma15</p>
                    </div>

                    <p className="postcard-info-timestamp">50min ago</p>
                </div>

            </div>

            <div className="postcard-content">

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam qui, voluptas accusamus libero assumenda fugiat quos consequatur! Magni cumque impedit, in repudiandae veniam id libero beatae iusto obcaecati nam. Velit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vel optio quo quas quidem sequi sapiente veniam suscipit accusamus quia ea sunt dolores harum, doloribus provident explicabo ullam tenetur delectus?
                </p>

            </div>


            <div className="postcard-action-div">
                <div className="postcard-action">
                    <span className="material-icons-outlined">favorite_border</span>
                    <p>10</p>
                </div>

                <div className="postcard-action">
                    <span className="material-icons-outlined">chat_bubble_outline</span>
                    <p>5</p>
                </div>

                <div className="postcard-action">
                    <span className="material-icons-outlined">bookmark_border</span>
                </div>

                <div className="postcard-action">
                    <span className="material-icons-outlined">edit</span>
                </div>

                <div className="postcard-action">
                    <span className="material-icons-outlined">delete</span>
                </div>

            </div>
        </div>
    )
}
