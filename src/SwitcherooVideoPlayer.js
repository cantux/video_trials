import React from 'react';

import StandardVideoPlayer from './StandardVideoPlayer.js';

class SwitcherooVideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {even_cursor: 0, odd_cursor: 1,
                      is_at_even: true, video_list_length: props.videoList.length};
    }

    componentDidMount() {
        this.props.register_next_video_callback(this.nextVideoHandler.bind(this))
    }

    nextVideoHandler() {
        this.setState(state => ({
            even_cursor: (state.even_cursor + (state.is_at_even ? 2 : 0)) % state.video_list_length,
            odd_cursor: (state.odd_cursor + (state.is_at_even ? 0 : 2)) % state.video_list_length,
            is_at_even: !state.is_at_even
        }));
    }

    render () {
        console.log(JSON.stringify(this.props.videoList));
        return (
            <div>
               <div style={this.state.is_at_even ? { display: 'none' } : {}} >
                 <StandardVideoPlayer video_link={this.props.videoList[this.state.odd_cursor]}/>
               </div>
               <div style={this.state.is_at_even ? {} : { display: 'none' }} >
                 <StandardVideoPlayer video_link={this.props.videoList[this.state.even_cursor]}/>
               </div>
            </div>
        );
    }
}

export default SwitcherooVideoPlayer;
