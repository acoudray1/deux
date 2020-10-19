import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './components/BaseComponent';
import BooleanComponent from './components/BooleanComponent';
import ListComponent from './components/ListComponent';
import StateComponent from './components/StateComponent';
import SecondStateComponent from './components/SecondStateComponent';
import HookComponent from './components/HookComponent';

function App() {
  const [title, setTitle] = useState("Un titre banal, vraiment pas fou");

  return (
    <div className="App">
      <SecondStateComponent title={title} setTitle={setTitle}/>
      <HookComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <BaseComponent />
        <span className='description'>test de description</span>
        <BooleanComponent />
        <ListComponent />
        <StateComponent />
      </header>
    </div>
  );
}

export default App;
