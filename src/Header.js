import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
        alt="twitch logo"/>
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className='header__center'>
        <input className="text" placeholder="Search"/>
          <div className="header__centerLogoContainer">
            <i class="fas fa-search"></i>
          </div>
      </div>
      <div className='header__right'>
        
      </div>
    </div>
  )
}

export default Header
