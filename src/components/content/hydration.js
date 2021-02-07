import React from 'react';
import './hydration.css';

export default class Hydration extends React.Component {

    render() {
        return (
            <div className="hydration">
                <div className="hydration-text">
                    <p style={{width: '100%', color: 'black', fontSize: '1rem', lineHeight: '1rem'}}>Use the chart below to tell if you're dehydrated based on your urine color</p>
                </div>
                <div className="hydration-group">
                    <div style={{width: '100%'}}>
                        <div className="hydration-circle" style={{backgroundColor: '#FFFCE6'}}></div>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className="hydration-circle" style={{backgroundColor: '#FFF9B8'}}></div>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className="hydration-circle" style={{backgroundColor: '#FFF689'}}></div>
                    </div>

                </div>
                <div className="hydration-line">
                    <p style={{width: '100%', color: 'black', fontSize: '1rem'}}>Hydrated</p>
                    <span style={{border: '1px solid black', width: '80%'}}></span>
                    <p style={{width: '100%', color: 'black', fontSize: '1rem'}}>Dehydrated</p>
                </div>
                <div className="hydration-group">
                    <div style={{width: '100%'}}>
                        <div className='hydration-circle' style={{backgroundColor: '#FFE95B'}}></div>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className="hydration-circle" style={{backgroundColor: '#FFDB02'}}></div>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className="hydration-circle" style={{backgroundColor: '#E9B511'}}></div>
                    </div>                
                </div>
            </div>
        )
    }
}