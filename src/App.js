import './App.css';
import React from 'react';

// Import Utilities
import { Weather } from './util/Weather';
import { exampleObject } from './util/exampleObject';

// Import Components 
import { CardContainer } from './components/card/CardContainer';
import { GraphContainer } from './components/graph/GraphContainer';
import { Card } from './components/card/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: exampleObject,
      hourlyTemp: Weather.getHourly(exampleObject, 'temp'),
      hourlyUvi: Weather.getHourly(exampleObject, 'uvi'),
      hourlyHumidity: Weather.getHourly(exampleObject, 'humidity'),
      hourlyConditions: Weather.getHourly(exampleObject, 'conditions'),
      graphData: Weather.getHourly(exampleObject, 'temp')
    }
    this.getWeather = this.getWeather.bind(this);
    this.changeGraph = this.changeGraph.bind(this);
  }
  
  getWeather() {
    // console.log('Get weather');
    // Comment out API call to limit API calls
    // Weather.getWeather('Baton rouge').then(weatherObject => {
    //   this.setState({ weather: weatherObject});
    //   console.log(this.state.weather);
  // });
    console.log(this.state.weather);
    console.log(this.state.hourlyConditions);

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
    window.addEventListener('load', this.getWeather());
  }

  render() {
    return (
      <div className="App">
        <div className="header-group">
          <h1>HEAT</h1>
        </div>
        <div className="graph-group">
          <GraphContainer data={this.state.graphData} />
        </div>
        <div className="card-group">
          <div className="card-sub-group">
            <button onMouseEnter={() => this.changeGraph('temperature')}>
              <CardContainer mainValue={`${this.state.weather.current.temp}`} description={'temperature'}/>
            </button>
            <button onMouseEnter={() => this.changeGraph('humidity')}>
              <CardContainer mainValue={`${this.state.weather.current.humidity}%`} description={'humidity'}/>
            </button>
            <button onMouseEnter={() => this.changeGraph('uvi')}>
              <CardContainer mainValue={`${this.state.weather.current.uvi}`} description={'UV Index'}/>
            </button>
          </div>
          <div className="card-remaining">
            <CardContainer mainValue={`${this.state.weather.current.weather[0].description}`} description={'conditions'} inputType='Text'/>
            <CardContainer description={'hydration'} />
            <CardContainer description={'Work:Rest Ratio'} />
            <CardContainer description={'Precautions'} />
            <CardContainer description={'Heat Stress Symptoms'} />
            <CardContainer description={'First Aid'} />
          </div>          
          
        </div>
       
      </div>
    );
  }
  
}

export default App;
