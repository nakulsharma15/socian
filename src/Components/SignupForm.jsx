import "./Styles/SignupForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { signupUser } from "../utils/handleAuth";
import { useDispatch, useSelector } from "react-redux";

export default function SignupForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authToken } = useSelector((store) => store.auth);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name cannot be empty"),
            lastName: Yup.string().required("Last Name cannot be empty"),
            username: Yup.string().required("Username cannot be empty").min(5, "Username must be 5 characters long"),
            email: Yup.string().required("Email cannot be empty").min(5, "Please enter a valid email address"),
            password: Yup.string().required("Password cannot be empty").min(6, "Password's length should be greater than 6"),
            confirmPassword: Yup.string().required("Kindly Re-Enter the Password").oneOf([Yup.ref("password"), null], "Passwords doesn't match")
        }),
        onSubmit: (values, actions) => {
            const { username, email, password, firstName, lastName } = values;
            dispatch(signupUser({ username, email, password, firstName, lastName }))
            actions.resetForm();
        },
    },
    );

    useEffect(() => {
        if (authToken) {
            navigate("/", { replace: true })
        }
    }, [authToken])

    return (

        <div>

            <div className="login-header signup-header">
                <p className="login-main-text">Signup</p>
                <p className="login-sec-text">to continue to Socian</p>
            </div>

            <div className="signup-form-div">

                <form onSubmit={formik.handleSubmit}>

                    <div className="signup-name-div">

                        <div className="name-input-div">
                            <label htmlFor="first-name">First Name</label>

                            <div className={(formik.touched.firstName && formik.errors.firstName) && "form-error"}>
                                <input type="text" placeholder="Enter First Name" name="firstName"  {...formik.getFieldProps("firstName")} />
                            </div>

                            {
                                (formik.touched.firstName && formik.errors.firstName) && <p className="error-message">{formik.errors.firstName}</p>
                            }
                        </div>

                        <div className="name-input-div">
                            <label htmlFor="last-name">Last Name</label>

                            <div className={(formik.touched.lastName && formik.errors.lastName) && "form-error"}>
                                <input type="text" placeholder="Enter Last Name" name="lastName" {...formik.getFieldProps("lastName")} />
                            </div>

                            {
                                (formik.touched.lastName && formik.errors.lastName) && <p className="error-message">{formik.errors.lastName}</p>
                            }
                        </div>

                    </div>

                    <div className="form-input-div">
                        <label htmlFor="username">Username</label>

                        <div className={(formik.touched.username && formik.errors.username) && "form-error"}>
                            <input type="text" placeholder="Enter Username" name="username" {...formik.getFieldProps("username")} />
                        </div>

                        {
                            (formik.touched.username && formik.errors.username) && <p className="error-message">{formik.errors.username}</p>
                        }

                    </div>


                    <div className="form-input-div">
                        <label htmlFor="email">Email</label>

                        <div className={(formik.touched.email && formik.errors.email) && "form-error"}>
                            <input type="email" name="email" placeholder="Enter your email address" {...formik.getFieldProps("email")} />
                        </div>

                        {
                            (formik.touched.email && formik.errors.email) && <p className="error-message">{formik.errors.email}</p>
                        }
                    </div>

                    <div className="form-input-div">
                        <label htmlFor="password">Password</label>

                        <div className={(formik.touched.password && formik.errors.password) && "form-error"}>
                            <input type="password" name="password" placeholder="Enter your password" {...formik.getFieldProps("password")} />
                        </div>

                        {
                            (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
                        }

                    </div>

                    <div className="form-input-div">
                        <label htmlFor="password">Confirm Password</label>

                        <div className={(formik.touched.confirmPassword && formik.errors.confirmPassword) && "form-error"}>
                            <input type="password" name="confirmPassword" placeholder="Re-Enter your password" {...formik.getFieldProps("confirmPassword")} />
                        </div>

                        {
                            (formik.touched.confirmPassword && formik.errors.confirmPassword) && <p className="error-message">{formik.errors.confirmPassword}</p>
                        }

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