import React from 'react';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom'
// import CoutriesLibrary from './pages/CountriesLibrary';
// import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Where in the world?</h1>
      </header>
      
      <BrowserRouter>
        <Content />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
