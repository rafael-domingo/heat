import './Card.css';
import React from 'react';

export class Card extends React.Component {

    render() {
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
                <div className="card-main-text">
                    <p>{this.props.mainText}</p>
                </div>
                <div className="card-description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}