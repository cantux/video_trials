import React from 'react'; 

import './App.css';

import StandardTest from './StandardTest.js';
import SwitcherooTest from './SwitcherooTest.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {testToggle: true, test_type: "sta", videoList: []};
        this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
        this.handleVideoListChange = this.handleVideoListChange.bind(this);
        this.handleTestTypeSelect = this.handleTestTypeSelect.bind(this);

    }
    handleTestButtonClick (e) {
        this.setState(state => ({
                  testToggle: !state.testToggle
                }));
    }

    handleVideoListChange (e) {
        this.setState(function(state) {
            let videos = e.target.value.split("\n")
            return { videoList: videos }
        })
    }

    handleTestTypeSelect (e) {
        this.setState(state => ({test_type: e.target.value}));
    }

  render() {
      return (
        <div className="App">
          <textarea id="video_list_input" type="text" value={this.state.value} onChange={this.handleVideoListChange}/>

          <select value={this.state.test_type} onChange={this.handleTestTypeSelect}>
            <option value="sta">Standard</option>
            <option value="swt">Switcheroo</option>
          </select>

          <button onClick={this.handleTestButtonClick}>
               {this.state.testToggle ? 'START' : 'STOP'}
          </button>

          {this.state.testToggle ? 
              <div/>
              :
              this.state.test_type == "sta" ? 
                <StandardTest videoList={this.state.videoList}/>
                :
                <SwitcherooTest videoList={this.state.videoList}/>
           } 
        </div>
      );
  }
}

export default App;
