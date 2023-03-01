import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";



function App() {
    useEffect(() => {
        fetchData();
      },[])

    const [data, setData] = useState({})

    const fetchData = () => {
        return fetch("http://localhost:3000/")
                .then((response) => response.json())
                .then((data) => setData(data));
        }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {data.data}
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
