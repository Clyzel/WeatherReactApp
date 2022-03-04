import FiveDayForecast from './component';
import React , { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null);

// Below i'm are using useEffect (our component "effect"), this is telling React that my component needs to do something after render. So it is fetching the /dallasforecast page in app.js in my server folder, then turn the response into a json. Then get the data (from that json) and setData (the state) to that data (render it).
  useEffect(() => {
    fetch("/dallasforecast")
      .then((res) => res.json())
      .then((data) => setData(data));
      //empty array below to make sure it only renders on the first render of component
  }, []);
  
console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Below is a Terinary operator for the paragraph on the page to show when there is no data show "Not Rendering Correctly" but if it is, show the data ('') */}
        <p>{!data ? "Not Rendering Correctly" : ''}</p>
        
        {/*  */}
        {data && data.list.map((dailyForecast) => {
         return <FiveDayForecast forecast={dailyForecast}/> 
        })}
      </header>
    </div>
  );
}

export default App;