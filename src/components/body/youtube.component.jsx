import React from 'react';

// import css
import "./youtube.styles.css";

function YouTube(props) {
    return(
        <div className="youtube">
            <div className="youtube__video">
            <iframe className="iframe" src={props.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="youtube__text">{props.videoDescription}</div>
        </div>
    )
}

export default YouTube;