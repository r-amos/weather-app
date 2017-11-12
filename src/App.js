import React, { Component } from 'react';

import { injectGlobal } from 'styled-components';

import AppTitle from './components/app-title';
import SearchContainer from './containers/search-container';
import WeatherPanel from './containers/weather-container';

injectGlobal`

  * {
    
      margin: 0;
      padding:0;
      font-family: 'Helvetica';

  }

`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppTitle text={'Weather App'}/>
        </header>
        <div>
          <SearchContainer />
          <WeatherPanel />
        </div>
      </div>
    );
  }
}

export default App;
