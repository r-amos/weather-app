import React, { Component } from 'react';

import { injectGlobal } from 'styled-components';

import WeatherContainer from './containers/weather-container';

injectGlobal`

  * {
    
      margin: 0;
      padding:0;
      font-family: 'Roboto', sans-serif;

  }

`;

class App extends Component {

  render() {
    return (
      <div className="App">
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
