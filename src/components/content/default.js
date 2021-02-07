import React from 'react';
import './default.css';

export default class Default extends React.Component {

    render() {
        const temperatures = this.props.hourly.map(hourly => <p key={hourly.value}className="temperatures-p">{hourly.value}</p>)
        const firstTemperature = temperatures[0]
        const remainingTemperatures = temperatures.slice(1)
        const times = this.props.hourly.map(hourly => <p key={hourly.time} className="temperatures-p">{hourly.time}</p>)
        const firstTime = times[0]
        const remainingTimes = times.slice(1)
        return (
            <div className="default-content">
                <div className="default-first-value">
                    <div className="default-first-value-text">
                        {firstTime}
                    </div>
                    <div className="default-first-value-text">
                        {firstTemperature}
                    </div>
                </div>
                <div className="default-time">
                    {remainingTimes}
                </div>
                <div className="default-value">
                    {remainingTemperatures}
                </div>
            </div>

        )
    }
}