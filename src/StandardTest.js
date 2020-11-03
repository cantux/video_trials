import React from 'react';

import StandardVideoPlayer from './StandardVideoPlayer.js';

class StandardTest  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { video_index: 0, video_list_length: props.videoList.length };
        
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);

    }
    
    handleNextButtonClick(e) {
        this.setState(state => 
            ({
                video_index: (state.video_index + 1) % state.video_list_length
            }));
    }

    render () {
        return (
            <div>
              <button onClick={this.handleNextButtonClick}>
                   Go To Next Clip
              </button>

              <StandardVideoPlayer video_link={this.props.videoList[this.state.video_index]}/>

            </div>
        );
    }
}

export default StandardTest;
