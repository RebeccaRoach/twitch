import React from "react";

import Channel from './Channel'

const Sidebar = () =>
{
 return (
   <div className="sidebar">
    <h5>FOLLOWED CHANNELS</h5>
    {/* <Channel avatar={FemaleIcon} name="female Icon" followers="800K"/> */}
    <Channel
      avatar='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj'
      name="catAvatar"
      followers="200k"
    />
     <h5>RECOMMENDED CHANNELS</h5>
     <Channel/>
    <p className='sidebar_topShowMore'>Show More</p>
   </div>
 )
}

export default Sidebar