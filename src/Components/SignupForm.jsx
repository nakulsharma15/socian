import { Link } from "react-router-dom";
import "./Styles/SignupForm.css";

export default function SignupForm() {


    return (

        <div>

            <div className="login-header signup-header">
                <p className="login-main-text">Signup</p>
                <p className="login-sec-text">to continue to Socian</p>
            </div>

            <div className="signup-form-div">

                <form>

                    <div className="signup-name-div">

                        <div className="name-input-div">
                            <label htmlFor="first-name">First Name</label>

                            <div>
                                <input type="text" placeholder="Enter First Name" name="firstName" />
                            </div>

                        </div>

                        <div className="name-input-div">
                            <label htmlFor="last-name">Last Name</label>

                            <div>
                                <input type="text" placeholder="Enter Last Name" name="lastName" />
                            </div>

                        </div>

                    </div>

                    <div className="form-input-div">
                        <label htmlFor="username">Username</label>

                        <div>
                            <input type="text" name="username" placeholder="Enter your username" />
                        </div>

                    </div>

                    <div className="form-input-div">
                        <label htmlFor="email">Email</label>

                        <div>
                            <input type="email" name="email" placeholder="Enter your email address" />
                        </div>

                    </div>

                    <div className="form-input-div">
                        <label htmlFor="password">Password</label>

                        <div>
                            <input type="password" name="password" placeholder="Enter your password" />
                        </div>

                    </div>

                    <div className="form-input-div">
                        <label htmlFor="password">Confirm Password</label>

                        <div>
                            <input type="password" name="confirmPassword" placeholder="Re-Enter your password" />
                        </div>

                    </div>

                    <div className="form-action-div">

                        <Link to="/login" className="action-txt">Login instead</Link>

                        <button className="submit-btn primary-btn" type="submit">Signup</button>

                    </div>


                </form>
            </div>
        </div>
    )


}