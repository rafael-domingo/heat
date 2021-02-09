import './App.css';
import React from 'react';

// Import Utilities
import { Weather } from './util/Weather';
import { exampleObject } from './util/exampleObject';

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
      this.setState({
        data: Weather.constructState(weatherObject)
      })
  });
  }


  renderGrid(input) {
    this.setState({renderGrid: input});
  }


  componentDidMount() {
    // window.addEventListener('load', this.getWeather(''));
  }

  search(term) {
    this.getWeather(term);
  }

  render() {
    return (
      <div className="App">
        <div className="header-group">
          <Logo />
          <Search search={this.search} renderGrid={this.renderGrid}/>
        </div>
        <div className="graph-group">
          <GridContainer data={this.state.data} render={this.state.renderGrid}/>
        </div>
      </div>
    );
  }
  
}

export default App;
