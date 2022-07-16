import React from 'react';
import "./Styles/EditProfileModal.css";

export default function EditProfileModal() {
    return (
        <div>
            <div className="modal-bg">
                <div className="modal-centered">

                    <div className="modal">

                        <div className="modal-header">
                            <p>Save to...</p>
                        </div>

                        <div className="playlist-container">
                            <p>Playlist Container</p>

                        </div>

                        <div className="playlist-input">

                            <input type="text" placeholder="Create a new Playlist" />
                        </div>

                        <div className="modal-actions">

                            <div className="actions-container">

                                <p className="action-txt"
                                >Create</p>

                                <p className="action-txt close-modal-txt"> Close </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
