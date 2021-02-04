import './Card.css';
import React from 'react';
import {Spring, animated} from 'react-spring/renderprops';

export class Card extends React.Component {

    render() {
        console.log(this.props.description)
        console.log(this.props.inputType)
        if (this.props.inputType) {
        return (
            <div className="card-container">
                <div className="card-main-text-mod">
                    <p>{this.props.mainText}</p>
                </div>
                <div className="card-description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
        }
        return (
            <div className="card-container">
                <Spring
                    from={{ number: 0}}
                    to={{ number: this.props.mainText}}
                    config={{easing: 'ease'}}
                    delay={1000}
                    >
                    {props => (
                        <animated.div className="card-main-text-mod">
                            <p>{props.number.toFixed()}</p>
                        </animated.div>
                    )
                    }
                </Spring>
                <div className="card-description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}