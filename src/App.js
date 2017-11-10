import React, { Component } from 'react';

import { injectGlobal } from 'styled-components';

import AppTitle from './components/app-title';
import SearchBar from './components/search-bar';
import WeatherPanel from './components/weather-panel';

injectGlobal`

  * {
    
      margin: 0;
      padding:0;
      font-family: 'Helvetica';

  }

`;

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
          <AppTitle text={'Weather App'}/>
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
