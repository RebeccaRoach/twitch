import React from 'react';
import './Profile.css';


const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__topLeft'>
                <img src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
                alt="cleverProgrammerLogo">
                </img> 
            </div>
            <div className="profile__topLeftDetails">
                <h1>cleverprogrammer</h1>
                <h3>820K</h3>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className='profile__menu'>
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedules</h2>
                <h2>Videos</h2>
                <h2><i className='fas fa-arrow-up'></i></h2>
                <h2>Chat</h2>
            </div> 
            <div className="profile__recent">
                <h2>Recent Broadcasts</h2>
                <div className="profile_recentItems"></div>
            </div>
        </div>
    )
}

export default Profile;