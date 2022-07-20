import "./Styles/LoginForm.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/handleAuth";

export default function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authToken } = useSelector((state) => state.auth);

    const testCredentials = {
        username: "bhratashree",
        password: "Nakul@123"
    }

    const loginWithTest = () => {
        dispatch(loginUser(testCredentials));
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username cannot be empty").min(5, "Username must be 5 characters long"),
            password: Yup.string().required("Password cannot be empty")
        }),
        onSubmit: (values, actions) => {
            const { username, password } = values;
            dispatch(loginUser({ username, password }))
            actions.resetForm();
        },
    },
    );

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

                <form onSubmit={formik.handleSubmit}>

                    <div className={"form-div email-div"}>
                        <label htmlFor="username">Username</label>

                        <div className={(formik.touched.username && formik.errors.username) && "form-error"}>
                            <input type="text" placeholder="Enter Username" name="username" {...formik.getFieldProps("username")} />
                        </div>

                        {
                            (formik.touched.username && formik.errors.username) && <p className="error-message">{formik.errors.username}</p>
                        }

                    </div>

                    <div className={"form-div email-div password-div"} >

                        <label htmlFor="password">Password</label>

                        <div className={(formik.touched.password && formik.errors.password) && "form-error"}>
                            <input type="password" placeholder="Enter Password" name="password" {...formik.getFieldProps("password")} />
                        </div>

                        {
                            (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
                        }

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