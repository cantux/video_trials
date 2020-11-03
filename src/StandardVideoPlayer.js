import React from 'react';

class StandardVideoPlayer extends React.Component {
    render () {
        return (
            <div>
            <video src={this.props.video_link} width="500px" height="500px" autoPlay={this.props.autoPlay}/>
            </div>
        );
    }
}

export default StandardVideoPlayer;
