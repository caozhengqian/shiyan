import React from 'react';
import logo from './logo.svg';
import style from './App.css';

function App() {
  return (
    <div className={style.App}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={style.aaa}>
          Edita <code>src/App.js</code> and save to reload.
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
