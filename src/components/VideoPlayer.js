import React from 'react';
import './VideoPlayer.scss';
import ReactPlayer from 'react-player';


const videoPlayer = (props) => {
    return (
        <div className="player-wrapper">
            <ReactPlayer url={props.source} controls className="react-player" width="100%" height="100%"/>
        </div>
    );
};

export default videoPlayer;