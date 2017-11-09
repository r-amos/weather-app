import React, { Component } from 'react';
import './App.css';

import Title from './components/title';
import SearchBar from './components/search-bar';
import WeatherPanel from './components/weather-panel';

const city = {name:'Bristol', time: '10', temp: '20', wind:'2'};

const days = [
                    {name:'Thu', dayTemp: '10', nightTemp: '20'},
                    {name:'Fri', dayTemp: '10', nightTemp: '20'},
                    {name:'Sat', dayTemp: '10', nightTemp: '20'},
                    {name:'Sun', dayTemp: '10', nightTemp: '20'},
                    {name:'Mon', dayTemp: '10', nightTemp: '20'},
    ];

  const data = {

    city: city,

    days: days

  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title title="Weather" />
        </header>
        <div>
          <SearchBar />
          <WeatherPanel weatherData={data} />
        </div>
      </div>
    );
  }
}

export default App;
