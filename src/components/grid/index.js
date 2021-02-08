import React from 'react'
import { config } from 'react-spring/renderprops'
import Grid from "./Grid";
import Cell from './Cell'
// import data from './data'
import './styles.css'

export default class GridContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    updateState() {
        this.setState({data: this.props.data})
    }
    
    componentDidMount() {
        window.addEventListener('load', this.updateState())
    }
    render() {
        return (
            <Grid
            className="grid"
            data={this.props.data}
            keys={d => d.name}
            heights={400}
            columns={2}
            margin={30}
            lockScroll={false}
            closeDelay={500}
            config={config.slow}>
                {(data, active, toggle) => (
                    <Cell {...data} active={active} toggle={toggle}/>
                )}  

            </Grid>
        )
    }
}