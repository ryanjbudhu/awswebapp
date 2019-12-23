import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Segment } from 'semantic-ui-react';
import RunForm from './RunForm';
import RunInfo from './RunInfo';
import '../node_modules/semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      spinning: true,
      mileage: "0",
      unit: "",
      hour: "0",
      minute: "0",
      second: "0",
      submitted: false
    };
    
    this.handler = this.handler.bind(this);
  }
  
  handler(info) {
    this.setState({
      ...this.state,
      mileage: info.mileage,
      unit: info.unit,
      hour: info.hour,
      minute: info.minute,
      second: info.second
    });
  }
  
  render() {
    const loadingSpin = this.state.spinning ? "App-logo Spin" : "App-logo";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={loadingSpin} alt="logo" />
          <h1 className="App-title">
            Run Analyzer
          </h1>
          <p>This webapp gives you your running pace and splits on a given run</p>
        </header>
        
        <div className="Row">
          <div className="App-column-form centered">
            <h2>Run Information</h2>
            <RunForm handler={this.handler} runData={this.state} />
            {/* Form Component */}
          </div>
          <div className="App-column-feed">
          <Segment className="short-table">
            <RunInfo
              runInfo={this.state}
            />
            </Segment>
            {/* Run feed Component */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;