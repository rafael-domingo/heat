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
                <div class="form">
                    <input name="city" type="text" onChange={this.handleTermChange} required/>
                    <label for="city" class="label-name">
                        <span className="content-name">Search for a city</span>
                    </label>
                </div>
                <button onClick={this.search}>Search</button>

            </div>
          

        )
    }
}