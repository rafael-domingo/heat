import React from 'react'
import Slug from './Slug'
import Fade from './Fade'
import {symptoms} from '../../util/Symptoms'
import Symptoms from '../content/symptoms'
import Default from '../content/default'
import Hydration from '../content/hydration'
import Conditions from '../content/conditions'
import FirstAid from '../content/firstAid'
import Precautions from '../content/precautions'
import './styles.css'

export default class Cell extends React.Component {
    render() {
        const { toggle, name, value, css, active, hourly } = this.props
        if (name === 'Conditions') {
            var result = <Conditions hourly={hourly} />
        } else if (hourly.length > 0) {
            var result = <Default hourly={hourly} />
        } else if (name === 'Hydration') {
            var result = <Hydration />
        } else if (name === 'First Aid') {
            var result = <FirstAid symptoms={symptoms} />
        } else if (name === 'Heat Stress Symptoms') {
            var result = <Symptoms symptoms={symptoms} />
        } else if (name === 'Risk Level') {
            var result = <Precautions risk={value}/>
        } else {
            var result = <div></div>
        }
        return (
            <div
            className="cell"
            style={{ backgroundImage: css, cursor: !active ? 'pointer' : 'auto' }}
            onClick={!active ? toggle : undefined}>
                <Fade show={active} delay={active ? 500 : 0}>
                    <div className="details">
                        <Slug delay={600}>
                        <h2>{name}</h2>
                        {result}
                        </Slug>
                    </div>
                </Fade>
                <Fade
                show={!active}
                from={{ opacity: 0}}
                enter={{ opacity: 1}}
                leave={{ opacity: 0}}
                // from={{ opacity: 0, transform: 'translate3d(0,140px,0)'}}
                // enter={{ opacity: 1, transform: 'translate3d(0,0px,0)'}}
                // leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)'}}
                delay={active ? 0 : 1000}>
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