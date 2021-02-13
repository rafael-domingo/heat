import React from 'react';
import './searchResultDetail.css';

export default class SearchResultDetail extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search() {
        // this.props.search(`${this.props.location.id}`);
        console.log(this.props);
        this.props.search(this.props);
    }


    render() {

        return (
            <div className="searchResultDetailContainer">
                <button onClick={this.search}>
                        <div className="button-text">
                            <p>{this.props.location.name}</p>
                            <p>{this.props.location.state}</p>
                            <p>{this.props.location.country}</p>
                        </div>
                </button>
            </div>

            
        )
    }
}