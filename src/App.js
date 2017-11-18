import React, { Component } from 'react';

import { injectGlobal } from 'styled-components';

import AppTitle from './components/app-title';
import SearchContainer from './containers/search-container';
import WeatherPanel from './containers/weather-container';

injectGlobal`

  * {
    
      margin: 0;
      padding:0;
      font-family: 'Roboto', sans-serif;

  }

`;

class App extends Component {

  constructor(props){

    super(props);

    this.state = {

      displaySearchBar: false
    
    };

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppTitle text={'Weather'}/>
        </header>
        <div>
          <SearchContainer hide={this.state.displaySearchBar} />
          <WeatherPanel toggleSearchBar={()=>this.setState({displaySearchBar:true})} />
        </div>
      </div>
    );
  }
}

export default App;
