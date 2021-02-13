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
            showOptions: true,
            error: ''
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
        var userInput = this.state.term;
        var list = this.state.cityList.filter(option => option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
        if (list.length < 100) {
            console.log(list);
            this.setState(prevState => ({
                ...prevState,
                filteredOptions: list,
                error: '',
                showOptions: true
            }))
        } else if (e.keyCode === 13 || list.length > 100) {
            console.log('list is too long')
            this.setState(prevState => ({
                ...prevState,
                error: 'Keep typing to narrow down your search',
                filteredOptions: [],
                showOptions: true
            }))
        }
    }

    handleTermChange(e) {
        // Set input to state
        if (e.target.value.length > 0) {
            this.setState(prevState => ({
                ...prevState,
                term: e.target.value
            }))
        } else {
            this.setState(prevState => ({
                ...prevState,
                term: e.target.value,
                filteredOptions: [],
                error: '',
                showOptions: false
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
                <p>{this.state.error}</p>
                <SearchResults list={this.state.filteredOptions} search={this.search}/>

            </div>
            </div>
     
          

        )
    }
}