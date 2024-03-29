import "./Styles/ProfileComponent.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openEditProfileModal } from "../Redux/slices/modalSlice";
import { handleFollowUnfollow } from "../utils/followUnfollowHandler";

export default function ProfileComponent({ userInfo }) {

    const dispatch = useDispatch();
    const { userData, authToken } = useSelector((state) => state.auth);

    const checkIfAlreadyFollowing = () => {
        return userData?.following.find((user) => user.username === userInfo.username)
    }


    const followUnfollow = () => {
        checkIfAlreadyFollowing() ?
            handleFollowUnfollow({ type: "unfollow", followUserId: userInfo._id }, authToken, dispatch) :
            handleFollowUnfollow({ type: "follow", followUserId: userInfo._id }, authToken, dispatch)
    }


    return (
        <div>

            <div className="profile-head-div">
                <div className="profile-bg-div">

                    <div className="profile-logo-img">
                        <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1657730491/Assets/02012019-20-removebg-preview_gqjanh_dtas4n.png" alt="pp-logo" />
                    </div>

                </div>

                <div className="profile-img">
                    <img src={userInfo.profileImg} alt={userInfo.firstName} />
                </div>
            </div>

            <div className="edit-profile-btn-div">

                {userInfo.username === userData.username ? <button className='suggest-follow-btn edit-profile-btn' onClick={() => dispatch(openEditProfileModal())}>Edit Profile</button> : <button className='suggest-follow-btn edit-profile-btn' onClick={followUnfollow}>  {
                    checkIfAlreadyFollowing() ? "Unfollow" : "Follow"
                }</button>}
            </div>


            <div className="profile-name-div">

                <p className="profile-name">{userInfo.firstName + " " + userInfo.lastName}</p>

                <p className="profile-username">@{userInfo.username}</p>

            </div>

            <div className="profile-bio-div">

                <p className="profile-bio">{userInfo.bio}</p>

                <a className="portfolio-url" target="_blank" href={userInfo.portfolioUrl}>{userInfo.portfolioUrl}</a>
            </div>

            <div className="profile-stats-div">

                <div className="profile-stat">

                    <p className="profile-stat-num">{userInfo?.followers?.length}</p>
                    <p className="profile-stat-type">Followers</p>

                </div>

                <div className="profile-stat">

                    <p className="profile-stat-num">{userInfo?.following?.length}</p>
                    <p className="profile-stat-type">Following</p>

                </div>

                <div className="profile-stat">

                    <p className="profile-stat-num">1</p>
                    <p className="profile-stat-type">Posts</p>

                </div>

            </div>

        </div>
    )
}