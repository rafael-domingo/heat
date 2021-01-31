import { render } from '@testing-library/react';
import React from 'react';
import { Graph } from './Graph';

export class GraphContainer extends React.Component {

    render() {
        return (
            <Graph data={this.props.data}/>
        )
    }
}