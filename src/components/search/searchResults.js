import React from 'react';
import './searchResults.css';

import SearchResultDetail from './searchResultDetail';

import {Transition} from 'react-spring/renderprops';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search(input) {
        this.props.search(input);
    }
    
    render() {
        const array = this.props.list.map(location => <SearchResultDetail location={location} search={this.search}/>)
        console.log(array);
        const array1 = array.slice(1,10);
        return (
            <div className="searchResults-container">
                <Transition
                    items={array1} keys={item => item.props.location.id}
                    from={{ transform: 'translate3d(-100px,0,0)', opacity: 0 }}
                    enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                    leave={{ transform: 'translate3d(-100px,0,0)', opacity: 0 }}>
                    {item => props => <div style={props}>{item}</div>}
                    </Transition>
            </div>
        )
    }
}