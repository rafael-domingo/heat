import './App.css';
import React from 'react';
import { Spring } from 'react-spring/renderprops';

// Import Utilities
import { Weather } from './util/Weather';
import { exampleObject } from './util/exampleObject';
import data from './components/grid/data';

// Import Components 
import { GraphContainer } from './components/graph/GraphContainer';
import GridContainer from './components/grid/index';
import Search from './components/search/search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: exampleObject,
      graphData: Weather.getHourly(exampleObject, 'uvi'),
      data: []
    }
    this.getWeather = this.getWeather.bind(this);
    this.changeGraph = this.changeGraph.bind(this);
    this.search = this.search.bind(this);
  }
  
  getWeather(term) {
    // console.log('Get weather');
    // Comment out API call to limit API calls
  //   Weather.getWeather('Baton rouge').then(weatherObject => {
  //     this.setState({ weather: weatherObject});
  //     console.log(this.state.weather);
  // });
    // console.log(this.state.weather);
    // console.log(this.state.search);
    // let state = [];
    // state = Weather.constructState(this.state.weather)
    // this.setState(prevState => ({
    //   ...prevState,
    //   data: state
    // }))

    Weather.getWeather(term).then(weatherObject => {
      this.setState({
        data: Weather.constructState(weatherObject)
      })
      console.log(this.state.data)
  });
  }

  changeGraph(parameter) {
    let data = [];
    if (parameter === 'uvi') {
      data = Weather.getHourly(exampleObject, 'uvi');
    } else if (parameter === 'temperature') {
      data = Weather.getHourly(exampleObject, 'temp');
    } else if (parameter === 'humidity') {
      data = Weather.getHourly(exampleObject, 'humidity');
    }
    this.setState(prevState => ({
      ...prevState,
      graphData: data
    }));
  }


  componentDidMount() {
    window.addEventListener('load', this.getWeather(''));
  }

  search(term) {
    console.log(term);
    this.getWeather(term);
  }

  render() {
    return (
      <div className="App">
        <div className="header-group">
          <h1>HEAT</h1>
          <Search search={this.search}/>
        </div>
        <div className="graph-group">
          {/* <GraphContainer data={this.state.graphData} /> */}
          <GridContainer data={this.state.data}/>
        </div>
      </div>
    );
  }
  
}

export default App;
