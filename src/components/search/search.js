import React from 'react';
import './search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            error: '',
            cityList: [],
            filteredOptions: [],
            showOptions: false
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(e) {
        // TODO: refactor this to search when selecting city from list

        if (e.keyCode === 13 && this.state.term.length > 0) {
            this.props.search(this.state.term);
            this.props.render(true);
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
            this.props.render(false);
        } else {
            this.setState(prevState => ({
                ...prevState,
                error: ''
            }))
        }
        
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

    handleTermChange(e) {
        // Check input versus list of cities to populate autocomplete list
        if (e.target.value.indexOf(' ') !== 0) {
            if (e.target.value.length > 1 || e.target.value.indexOf(' ') >= 1) {
                var userInput = e.target.value;
                var list = this.state.cityList.filter(option => option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
                var cityListArray = list.map(city => <p>{city.name}</p>);
                this.setState(prevState => ({
                    ...prevState,
                    term: e.target.value,
                    error: '',
                    filteredOptions: cityListArray
                }))
            } else {
                // TODO: clean up these if/else statements
                this.setState(prevState => ({
                    ...prevState,
                    term: e.target.value,
                    error: '',
                    filteredOptions: []
                }))
                this.props.render(false);
            }            
        } else {
            this.setState(prevState => ({
                ...prevState,
                term: e.target.value,
                error: '',
                filteredOptions: []
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
                <input name="city" type="text" onChange={this.handleTermChange} onKeyDown={this.search} required/>
                <label htmlFor="city" className="label-name">
                    <span className="content-name">Search for a city</span>
                </label>
            </div>
                {/* <p style={{opacity: !this.props.error ? 0 : 1, textAlign: 'left'}}>{this.state.error}</p> */}
                <div>{this.state.filteredOptions}</div>
            </div>
     
          

        )
    }
}