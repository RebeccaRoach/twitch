import React from "react";
import FemaleIcon from './female_icon.png'


const SideBar = () => {
 return (
   <div className="sidebar">
    <h5>FOLLOWED CHANNELS</h5>
    <Channel avatar={FemaleIcon} name="female Icon" followers="800K"/>
    <Channel
      avatar='https://avatars.alphacoders.com/avatars/view/114469'
      name="catAvatar"
      followers="200k"
    />
     <h5>RECOMMENDED CHANNELS</h5>
     <Channel/> // insta
    <p className='sidebar_topShowMore'>Show More</p>
   </div>
 )
}

export default SideBar