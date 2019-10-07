import React from 'react';
import './App.css';

import iconsList from './Icons/';

console.log(iconsList)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {iconsList.map(icon => (
          <button>
            <img src={icon} alt='icon'/>
          </button>
        ))}
      </header>
    </div>
  );
}

export default App;
