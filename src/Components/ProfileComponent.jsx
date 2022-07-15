import "./Styles/ProfileComponent.css";
import { Link } from "react-router-dom";

export default function ProfileComponent() {

    return (
        <div>

            <div className="profile-head-div">
                <div className="profile-bg-div">

                    <div className="profile-logo-img">
                        <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1657730491/Assets/02012019-20-removebg-preview_gqjanh_dtas4n.png" alt="pp-logo" />
                    </div>

                </div>

                <div className="profile-img">
                    <img src="https://ik.imagekit.io/avavya/Sonder/nakul_Rs-XDbGCQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654451729877" alt="pp-logo" />
                </div>
            </div>



            <div className="edit-profile-btn-div">
                <button className='suggest-follow-btn edit-profile-btn'>Edit Profile</button>
            </div>


            <div className="profile-name-div">

                <p className="profile-name">Nakul Sharma</p>

                <p className="profile-username">@NakulSharma_15</p>

            </div>

            <div className="profile-bio-div">

                <p className="profile-bio">'Hooked' on react lately, flirting with Javascript simultaneously. Following NeoGcamp religiously. Loves dad jokes, music and quiet water bodies</p>

                <Link to="https://peerlist.io/nakulsharma" className="portfolio-url">https://peerlist.io/nakulsharma</Link>

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

        </div>
    )
}