import React from 'react';
import "./Styles/EditProfileModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from 'react-redux';

export default function EditProfileModal() {

    const { userData } = useSelector((store) => store.auth);

    const { firstName, lastName, profileImg, portfolioUrl, bio } = userData;

    const formik = useFormik({
        initialValues: {
            firstName: firstName ?? "",
            lastName: lastName ?? "",
            portfolioUrl: portfolioUrl ?? "",
            bio: bio ?? "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name cannot be empty"),
            lastName: Yup.string().required("Last Name cannot be empty")
        }),
        onSubmit: (values, actions) => {
            console.log(values);
            actions.resetForm();
        },
    },
    );



    return (
        <div>
            <div className="modal-bg">
                <div className="modal-centered">

                    <div className="modal">

                        <div className="modal-header edit-profile-modal-header">
                            <p>Edit Profile</p>
                        </div>

                        <div className="edit-profile-div-parent">

                            <form onSubmit={formik.handleSubmit}>

                                <div className="edit-profile-div email-div">
                                    <label htmlFor="firstName">First Name</label>

                                    <div className={(formik.touched.firstName && formik.errors.firstName) && "form-error"}>
                                        <input type="text" placeholder="Enter Username" name="firstName" {...formik.getFieldProps("firstName")} />
                                    </div>

                                    {
                                        (formik.touched.firstName && formik.errors.firstName) && <p className="error-message">{formik.errors.firstName}</p>
                                    }

                                </div>

                                <div className="edit-profile-div email-div">
                                    <label htmlFor="lastName">Last Name</label>

                                    <div className={(formik.touched.lastName && formik.errors.lastName) && "form-error"}>
                                        <input type="text" placeholder="Enter Username" name="lastName" {...formik.getFieldProps("lastName")} />
                                    </div>

                                </div>

                                <div className="edit-profile-div email-div">
                                    <label htmlFor="portfolioUrl">Portfolio</label>

                                    <div className={(formik.touched.portfolioUrl && formik.errors.portfolioUrl) && "form-error"}>
                                        <input type="text" placeholder="Enter Username" name="portfolioUrl" {...formik.getFieldProps("portfolioUrl")} />
                                    </div>

                                </div>

                                <div className="edit-profile-div">
                                    <label htmlFor="lastName">Bio</label>

                                    <div className={(formik.touched.bio && formik.errors.bio) && "form-error"}>
                                        <textarea className='createpost-textarea editpost-textarea' type="text" placeholder="Enter Bio" name="bio" {...formik.getFieldProps("bio")}></textarea>
                                    </div>

                                </div>

                                <div className="modal-actions">

                                    <div className="actions-container">

                                        <button className="action-txt edit-profile-submit-btn" type="submit">Save</button>

                                        <p className="action-txt close-modal-txt">Cancel</p>

                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
