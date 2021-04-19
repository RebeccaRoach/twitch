import React from "react";

import Channel from "./Channel";

import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel avatar="https://avatars.githubusercontent.com/u/22301035?s=60&v=4"
          name="Becca Twitchers"
            followers="1K"
        />
        <Channel
          avatar="https://avatars.githubusercontent.com/u/57575225?s=60&v=4"
          name="Shonda860"
          followers="8k"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel />
        <p className="sidebar_topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
