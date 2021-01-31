import React from 'react';
import { Card } from './Card';

export class CardContainer extends React.Component {

    render() {
        return (
            <Card mainText={this.props.mainValue} description={this.props.description}/>            
        )
    }
}