import { Link } from "react-router-dom";
import "./Styles/LoginForm.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/handleAuth";

export default function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authToken, authStatus } = useSelector((state) => state.auth);

    const testCredentials = {
        username: "coldpigli",
        password: "Piyush@123"
    }

    const loginWithTest = () => {
        dispatch(loginUser(testCredentials));
    }

    useEffect(() => {
        if (authToken) {
            navigate("/", { replace: true });
        }
    }, [authToken])


    return (

        <div>
            <div className="login-header">
                <p className="login-main-text">Login</p>
                <p className="login-sec-text">to continue to Socian</p>
            </div>

            <div className="form-div-parent">

                <form >

                    <div className={"form-div email-div"}>
                        <label htmlFor="email">Email</label>

                        <div>
                            <input type="email" placeholder="Enter Email" name="email" />
                        </div>

                    </div>

                    <div className={"form-div email-div password-div"} >

                        <label htmlFor="password">Password</label>

                        <div>
                            <input type="password" placeholder="Enter Password" name="password" />
                        </div>

                    </div>

                    <p className="action-txt" onClick={loginWithTest}>Login using guest credentials</p>


                    <div className="form-action-div">

                        <Link to="/signup" className="action-txt">Create account</Link>

                        <button className="submit-btn primary-btn" type="submit">Login</button>

                    </div>

                </form>
            </div>
        </div>
    )
}