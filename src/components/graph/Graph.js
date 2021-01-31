import './Graph.css';
import React from 'react';

// Import Rechart Graph library
import {  LineChart, Line, ResponsiveContainer, Tooltip, LabelList } from 'recharts';

export class Graph extends React.Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={this.props.data}>
                    <Line type="basis" dataKey="time" stroke="#8884d8" strokeWidth={2} dot={false} strokeWidth={10}>
                        <LabelList dataKey="time" position="top" fill="#999999"/>
                    </Line>
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
            </div>
        )
    }
}