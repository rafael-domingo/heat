import { render } from '@testing-library/react';
import React from 'react';
import { Graph } from './Graph';

export class GraphContainer extends React.Component {

    render() {
        var array = []
        console.log(this.props.data)
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