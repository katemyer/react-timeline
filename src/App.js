import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import * as timeline from './data/timeline.json';

//array of events
const events = timeline.events


function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ADA Lovelace's Social Media Feed</h1>
      </header>
      <main className="App-main">
        <Timeline events={events}/>
      </main>
    </div>
  );
}

export default App;
