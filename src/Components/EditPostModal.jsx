import React from 'react';
import "./Styles/EditPostModal.css";

export default function EditPostModal() {
    return (
        <div>
            <div className="modal-bg">
                <div className="modal-centered">

                    <div className="edit-post-modal">

                        <div className="modal-header edit-profile-modal-header edit-post-modal-header">
                            <p>Edit Post</p>

                            <span class="material-icons-outlined edit-post-modal-close-btn">
                                close
                            </span>
                        </div>

                        <div className="edit-profile-div-parent edit-post-modal-parent">

                            <textarea className='createpost-textarea' name='postContent' placeholder="What's happening?"></textarea>

                            <button className='post-btn edit-post-submit-btn' type='submit'>Post</button>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
