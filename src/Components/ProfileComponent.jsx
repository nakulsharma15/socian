import "./Styles/ProfileComponent.css";
import { Link } from "react-router-dom";

export default function ProfileComponent({ userData }) {

    return (
        <div>

            <div className="profile-head-div">
                <div className="profile-bg-div">

                    <div className="profile-logo-img">
                        <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1657730491/Assets/02012019-20-removebg-preview_gqjanh_dtas4n.png" alt="pp-logo" />
                    </div>

                </div>

                <div className="profile-img">
                    <img src={userData.profileImg} alt={userData.firstName} />
                </div>
            </div>



            <div className="edit-profile-btn-div">
                <button className='suggest-follow-btn edit-profile-btn'>Edit Profile</button>
            </div>


            <div className="profile-name-div">

                <p className="profile-name">{userData.firstName + userData.lastName}</p>

                <p className="profile-username">@{userData.username}</p>

            </div>

            <div className="profile-bio-div">

                <p className="profile-bio">{userData.bio}</p>

                <Link to={userData.portfolioUrl} className="portfolio-url">{userData.portfolioUrl}</Link>

            </div>

            <div className="profile-stats-div">

                <div className="profile-stat">

                    <p className="profile-stat-num">5</p>
                    <p className="profile-stat-type">Followers</p>

                </div>

                <div className="profile-stat">

                    <p className="profile-stat-num">10</p>
                    <p className="profile-stat-type">Following</p>

                </div>

                <div className="profile-stat">

                    <p className="profile-stat-num">10</p>
                    <p className="profile-stat-type">Posts</p>

                </div>

            </div>

            <div className="profile-navigation-div">

                <div className="profile-navigation-menu">
                    <p>Posts</p>
                </div>

                <div className="profile-navigation-menu">
                    <p>Followers</p>
                </div>

                <div className="profile-navigation-menu">
                    <p>Following</p>
                </div>

            </div>

        </div>
    )
}