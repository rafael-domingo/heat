import React from 'react';
import { Graph } from './Graph';

export class GraphContainer extends React.Component {

    render() {
        var array = []
        this.props.data.forEach(hour => {
            var object = {
                time: hour.value
            }
            array.push(object)
        })
        return (
            <Graph data={array}/>
        )
    }
}