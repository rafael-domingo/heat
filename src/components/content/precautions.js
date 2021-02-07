import React from 'react';
import './precautions.css';

export default class Precautions extends React.Component {
    

    render() {
        var risk = 'lower'
        return (
            <div className="precautions">
                <div className="precautions-box" style={{backgroundColor: risk === 'extreme' ? '#B0B0B0' : 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#FF5757'}}>
                        <p>EXTREME</p>
                    </div>
                    <div className="precautions-label">
                        <p style={{fontSize: '2rem', color: risk === 'extreme' ? 'white' : '#454545'}}>Avoid outdoor exposure if possible</p>
                    </div>
                </div>
                <div className="precautions-box" style={{backgroundColor: risk === 'high' ? '#B0B0B0': 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#FF7B57'}}>
                        <p>HIGH</p>
                    </div>
                    <div className="precautions-label">
                        <p style={{fontSize: '2rem', color: risk === 'high' ? 'white' : '#454545'}}>Limit outdoor exposure</p>
                    </div>
                </div>
                <div className="precautions-box" style={{backgroundColor: risk === 'moderate' ? '#B0B0B0' : 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#FFF557'}}>
                        <p>MODERATE</p>
                    </div>
                    <div className="precautions-label">
                        <p style={{fontSize: '2rem', color: risk === 'moderate' ? 'white' : '#454545'}}>Hydrate and be aware of heat-related illnesses</p>
                    </div>
                </div>
                <div className="precautions-box" style={{backgroundColor: risk === 'lower' ? '#B0B0B0' : 'none'}}>
                    <div className="precautions-label" style={{backgroundColor: '#92FF57'}}>
                        <p>LOWER</p>
                    </div>
                    <div className="precautions-label">
                        <p style={{fontSize: '2rem', color: risk === 'lower' ? 'white' : '#454545'}}>Hydrate and be aware of heat-related illnesses</p>
                    </div>
                </div>
            </div>
        )
    }
}