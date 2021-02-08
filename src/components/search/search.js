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

    search() {
        this.props.search(this.state.term);
        console.log(this.state.term)
    }

    handleTermChange(e) {
        this.setState({
            term: e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <input placeholder="Search for a city" onChange={this.handleTermChange} />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}