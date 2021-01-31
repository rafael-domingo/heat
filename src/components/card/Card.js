import './Card.css';
import React from 'react';

export class Card extends React.Component {

    render() {
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