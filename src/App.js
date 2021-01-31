import './App.css';
import React from 'react';

// Import Utilities
import { Weather } from './util/Weather';
import { exampleObject } from './util/exampleObject';

// Import Components 
import { CardContainer } from './components/card/CardContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: exampleObject
    }
    this.getWeather = this.getWeather.bind(this);
  }
  
  getWeather() {
    // console.log('Get weather');
    // Comment out API call to limit API calls
    // Weather.getWeather('Baton rouge').then(weatherObject => {
    //   this.setState({ weather: weatherObject});
    //   console.log(this.state.weather);
  // });
    console.log(this.state.weather);
  }

  componentDidMount() {
    window.addEventListener('load', this.getWeather());
  }

  render() {
    return (
      <div className="App">
        <div className="card-group">
          <CardContainer mainValue={`${this.state.weather.current.temp}`} description={'temperature'}/>
          <CardContainer mainValue={`${this.state.weather.current.humidity}%`} description={'humidity'}/>
          <CardContainer mainValue={`${this.state.weather.current.uvi}`} description={'UV Index'}/>
        </div>
       
      </div>
    );
  }
  
}

export default App;
