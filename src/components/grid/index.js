import React from 'react'
import { config } from 'react-spring/renderprops'
import Grid from "./Grid";
import Cell from './Cell'
import data from './data'
import './styles.css'

export default class GridContainer extends React.Component {
    state = { data } 
    
    render() {
        return (
            <Grid
            className="grid"
            data={this.state.data}
            keys={d => d.name}
            heights={300}
            columns={3}
            margin={30}
            lockScroll={false}
            closeDelay={100}
            config={config.slow}>
                {(data, active, toggle) => (
                    <Cell {...data} active={active} toggle={toggle}/>
                )}  

            </Grid>
        )
    }
}