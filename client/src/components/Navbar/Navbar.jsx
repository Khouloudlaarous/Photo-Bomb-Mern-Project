import React, { useState } from 'react';
import "./Navbar.css";



const Navbar = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [showDefaultPicture, setShowDefaultPicture] = useState(true);
    

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(file);
        setShowDefaultPicture(false); // Hide the default picture
    };

    const handleProfilePictureClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

const fileInputRef = React.createRef();
return (
    <div className="navbar-container">
            <div className="flex items-center">
                <div className="logo-container">
                    <img src="https://t3.ftcdn.net/jpg/01/61/42/50/360_F_161425039_vuK1oc7jCY3LU4Zfxu6WEJBaQXdxvXjh.jpg"
                    alt=""
                    className="logo-icon"
                    />
                    <p className="logo-text">PhotoBomb !</p>
                </div>
                <div className="search-container">
                    <div className="form">
                        <input type="text" className="search-input" placeholder="Rechercher une image" />
                    </div>
                </div>
                <ul className="nav-links">
                    <li><a href="/">CREATE</a></li>
                    <li><a href="/">UPLOAD</a></li>
                </ul>
                <div className="profile-picture-section">
                {showDefaultPicture ? (
                        <span className="upload-link" onClick={handleProfilePictureClick}>
                            <img
                                src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.webp"
                                alt=""
                                className="profile-picture-icon"
                            />
                        </span>
                    ) : null}
                    {/* Hidden file input for profile picture upload */}
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleProfilePictureChange}
                        ref={fileInputRef}
                    />
                    {/* Display profile picture if available */}
                    {profilePicture && (
                        <img
                            src={URL.createObjectURL(profilePicture)}
                            alt="Profile"
                            className="profile-picture"
                        />
                    )}
                </div>
            </div>
        </div>
)
}

export default Navbar;