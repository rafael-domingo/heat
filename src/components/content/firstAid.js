import React from 'react'
import './firstAid.css'

export default class FirstAid extends React.Component {
    
    render() {
        const heatStroke = this.props.symptoms[0].firstAid.map((item, id) => <p key={`${this.props.name}${item}${id}`} style={{lineHeight: '30px'}}>{item}</p>)
        const heatExhaustion = this.props.symptoms[1].firstAid.map((item, id) => <p key={`${this.props.name}${item}${id}`} style={{lineHeight: '30px'}}>{item}</p>)
        const heatCramps = this.props.symptoms[2].firstAid.map((item, id) => <p key={`${this.props.name}${item}${id}`} style={{lineHeight: '30px'}}>{item}</p>)
        const heatRash = this.props.symptoms[3].firstAid.map((item, id) => <p key={`${this.props.name}${item}${id}`} style={{lineHeight: '30px'}}>{item}</p>)
        return (
            <div className="firstAid">
                <div className="firstAid-header">
                    <p>Below are some heat-related illnesses that can occur at elevated temperatures.</p>
                </div>
                <div className="firstAid-box">
                    <p style={{width: '100%'}}>Heat Stroke</p>
                    <div className="firstAid-list" style={{backgroundColor: '#FFAAAA'}}>
                        {heatStroke}
                    </div>
                </div>
                <div className="firstAid-box">
                    <p style={{width: '100%'}}>Heat Exhaustion</p>
                    <div className="firstAid-list" style={{backgroundColor: '#FFD1AA'}}>
                        {heatExhaustion}
                    </div>
                </div>
                <div className="firstAid-box">
                    <p style={{width: '100%'}}>Heat Cramps</p>
                    <div className="firstAid-list" style={{backgroundColor: '#FFF0AA'}}>
                        {heatCramps}
                    </div>
                </div>
                <div className="firstAid-box">
                    <p style={{width: '100%'}}>Heat Rash</p>
                    <div className="firstAid-list" style={{backgroundColor: '#FFF0AA'}}>
                        {heatRash}
                    </div>
                </div>



            </div>

        )
    }
}