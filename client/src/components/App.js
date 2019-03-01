import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chat Room</h1>
          <main>
            <Chat />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
