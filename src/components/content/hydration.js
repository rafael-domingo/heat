import React from 'react';
import './hydration.css';

export default class Hydration extends React.Component {

    render() {
        return (
            <div className="hydration">
                HYDRATION
                <div className="hydration-group">
                    <div className="hydration-circle" style={{backgroundColor: '#FFFCE6'}}></div>
                    <div className="hydration-circle" style={{backgroundColor: '#FFF9B8'}}></div>
                    <div className="hydration-circle" style={{backgroundColor: '#FFF689'}}></div>
                </div>
                <div className="hydration-line">
                    <p style={{width: '100%', color: 'black'}}>Hydrated</p>
                    <span style={{border: '1px solid black', width: '80%'}}></span>
                    <p style={{width: '100%', color: 'black'}}>Dehydrated</p>
                </div>
                <div className="hydration-group">
                    <div className='hydration-circle' style={{backgroundColor: '#FFE95B'}}></div>
                    <div className="hydration-circle" style={{backgroundColor: '#FFDB02'}}></div>
                    <div className="hydration-circle" style={{backgroundColor: '#E9B511'}}></div>
                </div>
            </div>
        )
    }
}