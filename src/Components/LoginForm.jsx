import { Link } from "react-router-dom";
import "./Styles/LoginForm.css";

export default function LoginForm() {

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

                    <p className="action-txt">Login using guest credentials</p>


                    <div className="form-action-div">

                        <Link to="/signup" className="action-txt">Create account</Link>

                        <button className="submit-btn primary-btn" type="submit">Login</button>

                    </div>

                </form>
            </div>
        </div>
    )
}