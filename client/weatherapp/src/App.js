import logo from './logo.svg';
import './App.css';
import React from 'react'
import React, { useEffect, useState} from 'react';
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/dallasforecast').then(
      response => response.json()
    ).then (
      data => {
        setData(data)
      }
    )
  }, [])

  return (
    <div className="App">
     
        
        <p>{!data ? "Loading..." : data}</p>
      
    </div>
  );
}

export default App;