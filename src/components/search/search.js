import React from 'react';
import './search.css';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            error: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(e) {
        // check if enter is key entered and string is not empty
        if (e.keyCode === 13 && this.state.term.length > 0) {
            this.props.search(this.state.term);
            console.log(this.props.error);
            this.setState(prevState => ({
                ...prevState,
                error: this.props.error
            }));
        } else if (e.keyCode === 13 && this.state.term.length === 0) {
            this.setState(prevState => ({
                ...prevState,
                valid: false,
                error: 'enter a city name'
            }))
        } else {
            this.setState(prevState => ({
                ...prevState,
                error: ''
            }))
        }
        
    }

    handleTermChange(e) {
        this.setState(prevState => ({
            ...prevState,
            term: e.target.value,
            error: ''
        }))
        this.props.render(false);
    }
    render() {
        return (
            <div className="container-form">
           <div className="form">
                <input name="city" type="text" onChange={this.handleTermChange} onKeyDown={this.search} required/>
                <label htmlFor="city" className="label-name">
                    <span className="content-name" style={{opacity: !this.props.error ? 1 : 0}}>Search for a city</span>
                </label>
            </div>
                <p style={{opacity: !this.props.error ? 0 : 1, textAlign: 'left'}}>{this.state.error}</p>
            </div>
     
          

        )
    }
}