import './App.css';
import React from 'react';
import { Spring } from 'react-spring/renderprops';

// Import Utilities
import { Weather } from './util/Weather';
import { exampleObject } from './util/exampleObject';

// Import Components 
import { CardContainer } from './components/card/CardContainer';
import { GraphContainer } from './components/graph/GraphContainer';
import { Card } from './components/card/Card';

import GridContainer from './components/grid/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: exampleObject,
      hourlyData: [
        {
          hourlyTemp: Weather.getHourly(exampleObject, 'temp'),
        },
        {
          hourlyUvi: Weather.getHourly(exampleObject, 'uvi'),
        },
        {
          hourlyHumidity: Weather.getHourly(exampleObject, 'humidity'),
        },
        {
          hourlyConditions: Weather.getHourly(exampleObject, 'conditions'),
        },
        {

        }
      ],
      cardData: [
        {
          'temperature': exampleObject.current.temp
        },
        {
          'humidity': exampleObject.current.humidity
        },
        {
          'uvi': exampleObject.current.uvi
        },
        {
          'conditions': exampleObject.current.weather[0].description
        },
        {
          'hydration': 'text'
        },
        {
          'Work:Rest Ratio': 'text'
        },
        {
          'Precautions': 'text'
        },
        {
          'Heat Stress Symptoms': 'text'
        },
        {
          'First Aid': 'text'
        }
      ],
      graphData: Weather.getHourly(exampleObject, 'uvi')
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
       
        {/* <div className="header-group">
          <h1>HEAT</h1>
        </div> */}
        <div className="graph-group">
          <GraphContainer data={this.state.graphData} />
          <GridContainer />

        </div>
        {/* <Spring
          from={{ opacity: 0}}
          to={{ opacity: 1}}
          config={{ duration: 1000}}
          >
          {props => 
              <div className="card-group" style={props}>
                <CardContainer cardData={this.state.cardData} />
              </div>
          }
        </Spring> */}

    
       
      </div>
    );
  }
  
}

export default App;
