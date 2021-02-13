import React from 'react';
import './location.css';

import {Transition} from 'react-spring/renderprops';

export default class Location extends React.Component {

    render() {
        if (this.props.city) {
            if (this.props.render) {
                console.log(this.props.city)
                var show = this.props.render;
                return (
                    <Transition
                    items={show}
                    from={{ transform: 'translate3d(-100px,0,0)', opacity: 0}}
                    enter={{ transform: 'translate3d(0px,0,0)', opacity: 1}}
                    leave={{ transform: 'translate3d(-100px,0,0)', opacity: 0}}>
                    {show => show && (props => 
                    <div style={props}>
                        <div className="location-container" > 
                        <h1>{this.props.city.location.name}</h1>
                        <div>
                            <p>{this.props.city.location.state}</p>
                            <p>{this.props.city.location.country}</p>
                        </div>                    
                    </div>
                    </div>
                    
                    )}
                    </Transition>               
                )
            }
            else {
                return (
                    <div></div>
                )
            }           
        } else {
            return (
                <div></div>
            )
        }
      
    }
}