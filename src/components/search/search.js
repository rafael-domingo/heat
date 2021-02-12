import React from 'react';
import './search.css';

import SearchResults from './searchResults';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            cityList: [],
            filteredOptions: [],
            showOptions: true
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.setList = this.setList.bind(this);
    }

    search(input) {
        // TODO: refactor this to search when selecting city from list
        console.log(input);
        this.props.search(input);
        this.setState(prevState => ({
            ...prevState,
            showOptions: false
        }));
    
    }

    // Fetch list of cities to compare against search
    autoComplete() {
        return fetch('./CityList.json', {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            this.setState({cityList: jsonResponse});
            console.log(jsonResponse);
            return jsonResponse;
        })
    }

    setList(e) {
        if (e.keyCode === 13) {
            var userInput = this.state.term;
            var list = this.state.cityList.filter(option => option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
            console.log(list);
            this.setState(prevState => ({
                ...prevState,
                filteredOptions: list
            }))
        }
    }

    handleTermChange(e) {
        // Check input versus list of cities to populate autocomplete list
        if (e.target.value.indexOf(' ') !== 0) {
            if (e.target.value.length > 1 || e.target.value.indexOf(' ') >= 1) {
                this.setState(prevState => ({
                    ...prevState,
                    term: e.target.value,
                    showOptions: true
                }))
            } else {
                // TODO: clean up these if/else statements
                this.setState(prevState => ({
                    ...prevState,
                    term: e.target.value,
                    filteredOptions: [],
                    showOptions: true
                }))
                this.props.render(false);
            }            
        } else {
            this.setState(prevState => ({
                ...prevState,
                term: e.target.value,
                filteredOptions: [],
                showOptions: true
            }))
            this.props.render(false);
        } 
        }
    componentDidMount() {
        window.addEventListener('load', this.autoComplete());
    }

        
    render() {
        return (
            <div className="container-form">
           <div className="form">
                <input name="city" type="text" onChange={this.handleTermChange} onKeyDown={this.setList} required/>
                <label htmlFor="city" className="label-name">
                    <span className="content-name">Search for a city</span>
                </label>
            </div>
            <div style={{display: this.state.showOptions ? 'flex' : 'none', width: '100%'}}>
                <SearchResults list={this.state.filteredOptions} search={this.search}/>

            </div>
            </div>
     
          

        )
    }
}