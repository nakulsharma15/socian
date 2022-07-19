import React from 'react';
import "./Styles/EditProfileModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { closeEditProfileModal } from '../Redux/slices/modalSlice';
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import toastStyle from '../utils/toastStyle';
import { editUser } from '../utils/userHandler';

export default function EditProfileModal() {

    const { userData } = useSelector((store) => store.auth);

    const dispatch = useDispatch();

    const { firstName, lastName, profileImg, portfolioUrl, bio } = userData;
    const uploadImage = async (image) => {
        if (Math.round(image.size / 1024000) > 2) {
            toast.error("Image size cannot exceed 2MB!", { style: toastStyle });
        }
        else {
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
            const requestOptions = {
                method: "POST",
                body: data,
            };
            await fetch(
                "https://api.cloudinary.com/v1_1/nakulsharma15/image/upload",
                requestOptions
            )
                .then((response) => response.json())
                .then((json) => {
                    dispatch(editUser({ profileImg: json.url }));
                })
                .catch((error) => {
                    toast.error("Something went wrong. Please try again later", { style: toastStyle });
                });
        }
    }

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
            dispatch(closeEditProfileModal());
            const { firstName, lastName, portfolioUrl, bio } = values;
            dispatch(editUser({ firstName, lastName, portfolioUrl, bio }));
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

                            <div className='edit-profile-img-div'>

                                <div className="edit-profile-logo-img">
                                    <img src={userData.profileImg} alt="pp-logo" />
                                </div>

                                <input type="file"
                                    visibility="hidden"
                                    accept="image/*"
                                    onChange={(e) => uploadImage(e.target.files[0])} />


                            </div>


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

                                    {
                                        (formik.touched.lastName && formik.errors.lastName) && <p className="error-message">{formik.errors.lastName}</p>
                                    }

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

                                        <p className="action-txt close-modal-txt" onClick={() => dispatch(closeEditProfileModal())}>Cancel</p>

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
