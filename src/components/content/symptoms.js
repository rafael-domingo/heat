import React from 'react';
import './symptoms.css';

export default class Symptoms extends React.Component {
    
    render() {
        const result = this.props.symptoms[0].symptoms.map(symptom => <p key={symptom} style={{ width: '100%', height: '100px'}}>{symptom}</p>)
        return (
            <div className="symptoms">
                {result}
            </div>
        )
    }
}