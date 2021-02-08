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
        // check if enter is key entered
        if (e.keyCode === 13) {
            this.props.search(this.state.term);
            console.log(this.state.term)
        }
        
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
                    <input name="city" type="text" onChange={this.handleTermChange} onKeyDown={this.search} required/>
                    <label for="city" class="label-name">
                        <span className="content-name">Search for a city</span>
                    </label>
                </div>
                <button onClick={this.search}>Search</button>

            </div>
          

        )
    }
}