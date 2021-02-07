import React from 'react';
import './conditions.css';

export default class Conditions extends React.Component {
    render() {
        const conditions = this.props.hourly.map(hourly => <img src={`http://openweathermap.org/img/wn/${hourly.icon}@2x.png`} style={{ width: '100%', height: '100%'}}/>)
        const firstCondition = conditions[0]
        const remainingConditions = conditions.slice(1)
        const times = this.props.hourly.map(hourly => <p style={{ width: '100%', height: '100%', lineHeight: '100px'}}>{hourly.time}</p>)
        const firstTime = times[0]
        const remainingTimes = times.slice(1)
        const descriptions = this.props.hourly.map(hourly => <p style={{ width: '100%', height: '100%', lineHeight: '100px'}}>{hourly.description}</p>)
        const firstDescription = descriptions[0]
        const remainingDescriptions = descriptions.slice(1)

        return (
            <div className="conditions">
                <div className="conditions-current">
                    <div>
                        {firstTime}
                    </div>
                    <div>
                        {firstDescription}
                    </div>
                    <div>
                        {firstCondition}
                    </div>
                </div>
                <div className="conditions-time">
                    {remainingTimes}
                </div>
                <div className="conditions-description">
                    {remainingDescriptions}
                </div>
                {/* <div className="conditions-condition">
                    {remainingConditions}
                </div> */}

               
            </div>
        )
    }
}