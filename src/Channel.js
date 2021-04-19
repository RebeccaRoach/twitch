import React from 'react';
import './Channel.css'

const Channel = ({ avatar, name, followers }) => {
  return (
    <div className="channel">
      <div className="channel__details">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
    </div>
  )
}
export default Channel