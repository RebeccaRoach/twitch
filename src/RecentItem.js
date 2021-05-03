import React from 'react';

const RecentItem = ({url, title}) => {
    return (
        <div className="item">
            <iframe title={title} width="400" height="235" src={url} allowfullscreen>
            </iframe>
            <div className='item__details'>
            <img src='url' alt={title}></img>
            <div className='item__detailsText'>
                <h4>{title}</h4>
                <p>cp</p>
                <p>Science & Tech</p>
            </div>
        </div>
        </div>
    )
}

export default RecentItem;