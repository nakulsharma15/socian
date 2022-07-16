import React from 'react';
import "./Styles/EditProfileModal.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function EditProfileModal() {



    return (
        <div>
            <div className="modal-bg">
                <div className="modal-centered">

                    <div className="modal">

                        <div className="modal-header">
                            <p>Edit Profile</p>
                        </div>

                        <div className="playlist-container">

            ``                      <p>Playlist Container</p>

                        </div>


                        <div className="modal-actions">

                            <div className="actions-container">

                                <p className="action-txt">Save</p>

                                <p className="action-txt close-modal-txt">Cancel</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
