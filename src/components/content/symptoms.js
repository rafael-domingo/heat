import React from 'react';
import './symptoms.css';

export default class Symptoms extends React.Component {
    
    render() {
        const heatStroke = this.props.symptoms[0].symptoms.map(item => <p style={{lineHeight: '30px'}}>{item}</p>)
        const heatExhaustion = this.props.symptoms[1].symptoms.map(item => <p style={{lineHeight: '30px'}}>{item}</p>)
        const heatCramps = this.props.symptoms[2].symptoms.map(item => <p style={{lineHeight: '30px'}}>{item}</p>)
        const heatRash = this.props.symptoms[3].symptoms.map(item => <p style={{lineHeight: '30px'}}>{item}</p>)
        return (
            <div className="symptoms">
                <div className="symptoms-header">
                    <p>Below are symptoms of different heat-related illnesses</p>
                </div>
                <div className="symptoms-box">
                    <p style={{width: '100%'}}>Heat Stroke</p>
                    <div className="symptoms-list" style={{backgroundColor: '#FFAAAA'}}>
                        {heatStroke}
                    </div>
                </div>
                <div className="symptoms-box">
                    <p style={{width: '100%'}}>Heat Exhaustion</p>
                    <div className="symptoms-list" style={{backgroundColor: '#FFD1AA'}}>
                        {heatExhaustion}
                    </div>
                </div>
                <div className="symptoms-box">
                    <p style={{width: '100%'}}>Heat Cramps</p>
                    <div className="symptoms-list" style={{backgroundColor: '#FFF0AA'}}>
                        {heatCramps}
                    </div>
                </div>
                <div className="symptoms-box">
                    <p style={{width: '100%'}}>Heat Rash</p>
                    <div className="symptoms-list" style={{backgroundColor: '#FFF0AA'}}>
                        {heatRash}
                    </div>
                </div>
            </div>
        )
    }
}