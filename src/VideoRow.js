import React from 'react'
import "./VideoRow.css";

function VideoRow({views,description,timestamp,channel,title,image}) {
    return (
        <div className="videorow">
        <img src ={image} alt=""></img>
        <div className="videorow_text">
        <h3>{title}</h3>
            <p>{channel}.{views} views . {timestamp}
            </p>
        <p className="videorow_description">{description}</p>
        </div>
            
        </div>
    )
}

export default VideoRow
