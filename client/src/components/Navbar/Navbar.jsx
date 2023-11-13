import React, { useState } from 'react';
import "./Navbar.css";



const Navbar = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
};

const handleProfilePictureClick = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
};

const fileInputRef = React.createRef();
return (
    <div>
        <div className={"flex items-center"}>
            <img src="../img/icons/PhotoBomb.jpg" alt="PhotoBomb Logo" />
            <p className={"flex ml-2"}> PhotoBomb !</p>
        </div>
        <div className="search p-2 xl:w-full 2xl:w-full xl:col-span-1 lg:justify-center grid 2xl:col-span-3 grid lg:justify-center lg:hidden md:hidden">
                <div className="form">
                    <input type="text" className={"h-10 p-2"} placeholder={"Search"}/>
                </div>
        </div>
        <ul>
            <li className={"mb-3"}><a href=""> CREATE</a></li>
            <li><a href="">UPLOAD</a></li>
        </ul>
        <div className="profile-picture-section">
        <span className="upload-link" onClick={handleProfilePictureClick}>
        <img src="../img/icons/userpicture.png"
        alt="user"
        className="w-50 h-50"  />
        </span>
        {/* Hidden file input for profile picture upload */}
        <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleProfilePictureChange}
        ref={fileInputRef}
        />
        {profilePicture && (
        <img
            src={URL.createObjectURL(profilePicture)}
            alt="Profile"
            className="profile-picture"
        />
        )}
    </div>
    </div>
)
}

export default Navbar;