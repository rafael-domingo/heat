import './App.css';
import React from 'react';

// Import Utilities
import { Weather } from './util/Weather';
import { exampleObject } from './util/exampleObject';
// import {CityList} from './util/CityList';

// Import Components 
import GridContainer from './components/grid/index';
import Search from './components/search/search';
import Logo from './components/logo/logo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: exampleObject,
      data: [],
      renderGrid: false
    }
    this.getWeather = this.getWeather.bind(this);
    this.search = this.search.bind(this);
    this.renderGrid = this.renderGrid.bind(this);
  }
  
  getWeather(term) {
    Weather.getWeather(term).then(weatherObject => {
      if (weatherObject) {
        this.setState(prevState => ({
          ...prevState,
          data: Weather.constructState(weatherObject)
        }))
        this.renderGrid(true)
        console.log('succes')
      } else {
        console.log('error')
        this.setState(prevState => ({
          ...prevState,
          weatherObject: []
      }))
        this.renderGrid(false)
      }

  });
  }

  renderGrid(input) {
    this.setState(prevState => ({
      ...prevState,
      renderGrid: input
    }));
  }

  search(term) {
    this.getWeather(term);
  }

  render() {
    return (
      <div className="App">
        <div className="header-group">
          <Logo />
          <Search search={this.search} render={this.renderGrid}/>
        </div>
        <div className="graph-group">
          <GridContainer data={this.state.data} render={this.state.renderGrid}/>
        </div>
      </div>
    );
  }
  
}

export default App;
