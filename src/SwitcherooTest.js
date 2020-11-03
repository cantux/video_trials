import React from 'react';

import SwitcherooVideoPlayer from './SwitcherooVideoPlayer.js';

class SwitcherooTest  extends React.Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props.videoList));
        this.state = { video_index: 0, video_list_length: props.videoList.length };
        
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);

    }
    
    handleNextButtonClick(e) {
        this.setState(state => 
            ({
                video_index: (state.video_index + 1) % state.video_list_length
            }));

        this.child_callback();
    }

    registerNextVideoCallback(child_callback) {
        this.child_callback = child_callback;
    }
    
    render () {
        return (
            <div>
              <button onClick={this.handleNextButtonClick}>
                   Go To Next Clip
              </button>

              <SwitcherooVideoPlayer register_next_video_callback={this.registerNextVideoCallback.bind(this)}
                                    videoList={this.props.videoList}/> 

            </div>
        );
    }
}

export default SwitcherooTest;
