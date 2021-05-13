import React from 'react';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h2>Where in the world?</h2>
      </header>

      <BrowserRouter>
        <Content />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
