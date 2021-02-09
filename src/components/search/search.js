import React from 'react';
import './search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(e) {
        // check if enter is key entered and string is not empty
        if (e.keyCode === 13 && this.state.term.length > 0) {
            this.props.search(this.state.term);
            this.props.renderGrid(true);
        }
        
    }

    handleTermChange(e) {
        this.setState({
            term: e.target.value
        })
        this.props.renderGrid(false);
    }
    render() {
        return (
                <div className="form">
                    <input name="city" type="text" onChange={this.handleTermChange} onKeyDown={this.search} required/>
                    <label htmlFor="city" className="label-name">
                        <span className="content-name">Search for a city</span>
                    </label>
                </div>
          

        )
    }
}