import React from 'react'
import Slug from './Slug'
import Fade from './Fade'
import {symptoms} from '../../util/Symptoms'
import './styles.css'

export default class Cell extends React.Component {
    render() {
        const { toggle, name, value, css, active } = this.props
        const result = symptoms[0].symptoms.map(symptom => <p key={symptom} style={{ width: '100%'}}>{symptom}</p>)
        return (
            <div
            className="cell"
            style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
            onClick={!active ? toggle : undefined}>
                <Fade show={active} delay={active ? 500 : 0}>
                    <div className="details">
                        <Slug delay={600}>
                        <h1>{value}</h1>
                        <p>{name}</p>
                        <div className="sub-details">
                        {result}
                        </div>
                        </Slug>
                    </div>
                </Fade>
                <Fade
                show={!active}
                from={{ opacity: 0, transform: 'translate3d(0,140px,0)'}}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)'}}
                leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)'}}
                delay={active? 0 : 400}>
                    <div className="default">
                        <div style={{ zIndex: 1}}>
                            <h1>{value}</h1>
                            <p>{name}</p>
                        </div>
                    </div>

                </Fade>
            </div>
        )
    }
}