import React from 'react';
import logo from './logo.svg';
import './App.css';
import lizard from './Icons/lizard.png';
import rock from './Icons/rock.png';
import paper from './Icons/paper.png';
import scissors from './Icons/scissors.png';
import spock from './Icons/spock.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <img src={lizard} className="App-logo" alt="logo" />
        <img src={rock} className="App-logo" alt="logo" />
        <img src={paper} className="App-logo" alt="logo" />
        <img src={scissors} className="App-logo" alt="logo" />
        <img src={spock} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
