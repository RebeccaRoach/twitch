import React from "react";

import Channel from "./Channel";

import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://avatars.githubusercontent.com/u/22301035?s=60&v=4"
          name="Becca_Twitchers"
          followers="1K"
        />
        <Channel
          avatar="https://avatars.githubusercontent.com/u/57575225?s=60&v=4"
          name="Shonda860"
          followers="8k"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel avatar="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-19/s320x320/57336342_1187277441449463_8686522758605045760_n.jpg?tp=1&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_ohc=0DlRM_OqieIAX_S9iui&edm=ABfd0MgAAAAA&ccb=7-4&oh=df3ae277ef0ad51dd74949b1ea1d671b&oe=60A26B0E&_nc_sid=7bff83"
        name="JD&ColeMommy"/>
          <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text"  placeholder="search to add friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
