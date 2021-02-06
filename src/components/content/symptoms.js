import React from 'react';
import {symptoms} from '../../util/Symptoms';

export default class Symptoms extends React.Component {
    
    render() {
        const result = symptoms[0].symptoms.map(symptom => <p key={symptom} style={{ width: '100%', height: '100px'}}>{symptom}</p>)
        return (
            <div>
                {result}
            </div>
        )
    }
}