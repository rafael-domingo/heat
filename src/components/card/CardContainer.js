import React from 'react';
import { Card } from './Card';

export class CardContainer extends React.Component {
    
    render() {
        var cardData = this.props.cardData;
        var cards = cardData.map(card => {
            var keys = Object.keys(card);
            var description = keys[0];
            var mainText = card[description];
            if (isNaN(mainText)) {
                var inputType=true
            }
            return (
                <Card mainText={mainText} description={description} inputType={inputType}/>            
            )
        });
        console.log(cards);
        return cards;

    }
}