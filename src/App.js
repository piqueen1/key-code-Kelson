import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyCode: '',
      key: '',
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDownHandler);
  }

  onKeyDownHandler = (event) => {
    this.setState({
      keyCode: event.keyCode,
      key: event.key,
    });
  }

  render() {
    return (
      <div className="app">
        <span className={`get-started ${this.state.keyCode ? 'hidden' : ''}`}>Press any key to discover its key code</span>
        <div className={`keys ${this.state.keyCode ? '' : 'hidden'}`} >
          <span className="key">You pressed "{this.state.key}"</span>
          <span className="key-code">The code is {this.state.keyCode}</span>
        </div>
      </div>
    );
  }
}

export default App;
