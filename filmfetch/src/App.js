import logo from './logo.png';
import trash from './trash.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  function Option(){
    const[inputValue, setInputValue, selectedValue, setSelectedValue] = useState('');
    const options = [
      { value: 'liked', label: 'Liked Movie' },
      { value: 'disliked', label: 'Disliked Movie' },
      { value: 'genre', label: 'Genre' },
    ];
    const handleDropdown = (event) => {
      setInputValue(event.target.value);
    };
    const handleText = (event) => {
      setInputValue(event.target.value);
    };
    const removeOption = (event) => {
      if (document.getElementsByClassName("optionWrapper").length > 1){
        event.target.parentElement.remove();
      }
    };
    return <div className="optionWrapper">
      <select className="input-dropdown" value={selectedValue} onChange={handleDropdown}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input className="input-bar" type="text" onChange={handleText}/>
      <img className="trash-icon" onClick={removeOption} src={trash}/>
    </div>;
  }
  const [components, setComponents, criteria, Errors] = useState([]);
  const addCriteria = () => {
    setComponents([...components, <Option/>]);
  };
  const findMatches = () =>{
  };
  

  
  
  return (
    <div className="App">
    <script src="https://kit.fontawesome.com/28f19a82fa.js" crossorigin="anonymous"></script>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="menu">
          <a className="menu-item" href="#">About</a>
          <a className="menu-item" href="#">Find Matches</a>
          <a className="menu-item" href="#">Soruce Code</a>
        </div>
      </header>
        <h1>Movie Search</h1>
        <div className="search-criteria" id="search-criteria">
          {components}
        </div>
        <div className="button-options">
          <div className="add-search-criteria" onClick={addCriteria}>Add Search Criteria</div>
          <div className="find-matches" onClick={findMatches}>Find Matches</div>
        </div>
        <p className="errors">Errors: {Errors}</p>
        <h1>Results</h1>
        <p>{criteria}</p>
    </div>
  );
}

export default App;
