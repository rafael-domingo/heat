import React from 'react';
import './precautions.css';

export default class Precautions extends React.Component {
    

    render() {
        var risk = this.props.risk
        return (
            <div className="precautions">
                <div className="precautions-box" style={{backgroundColor: risk === 'Extreme' ? '#B0B0B0' : 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#FF5757'}}>
                        <p>EXTREME</p>
                    </div>
                    <div className="precautions-supplement">
                        <p style={{fontSize: '2rem', color: risk === 'Extreme' ? 'white' : '#454545'}}>Avoid outdoor exposure if possible</p>
                    </div>
                </div>
                <div className="precautions-box" style={{backgroundColor: risk === 'High' ? '#B0B0B0': 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#FF7B57'}}>
                        <p>HIGH</p>
                    </div>
                    <div className="precautions-supplement">
                        <p style={{fontSize: '2rem', color: risk === 'High' ? 'white' : '#454545'}}>Limit outdoor exposure</p>
                    </div>
                </div>
                <div className="precautions-box" style={{backgroundColor: risk === 'Moderate' ? '#B0B0B0' : 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#FFF557'}}>
                        <p>MODERATE</p>
                    </div>
                    <div className="precautions-supplement">
                        <p style={{fontSize: '2rem', color: risk === 'Moderate' ? 'white' : '#454545'}}>Hydrate and be aware of heat-related illnesses</p>
                    </div>
                </div>
                <div className="precautions-box" style={{backgroundColor: risk === 'Lower' ? '#B0B0B0' : 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#92FF57'}}>
                        <p>LOWER</p>
                    </div>
                    <div className="precautions-supplement">
                        <p style={{fontSize: '2rem', color: risk === 'Lower' ? 'white' : '#454545'}}>Hydrate and be aware of heat-related illnesses</p>
                    </div>
                </div>
            </div>
        )
    }
}