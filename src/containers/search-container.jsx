import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/search-bar';
import { fetchWeather } from '../redux/actions/actions';

class SearchContainer extends React.Component {

    constructor(props){

        super(props)

        this.state = {

            term: ''

        };

    }

    updateSearchTerm = (term) => {

        this.setState({term});

    }

    onButtonClick = () => {
        
        this.props.fetchWeather(this.state.term);
        this.updateSearchTerm('');
        
    };

    onEnter = ({key}) => {

        if (key === 'Enter') {
            
            this.props.fetchWeather(this.state.term)
            this.updateSearchTerm('');
            
        }

    }

    render() {

        return <SearchBar 
                    onButtonClick={this.onButtonClick} 
                    onInputChange={this.updateSearchTerm} 
                    term={this.state.term} 
                    onEnter={this.onEnter}
                />

    }
    
}

const mapDispatchToProps = dispatch => {

    return {

        fetchWeather: (searchTerm) => dispatch(fetchWeather(searchTerm)),

    }
    
}

export default connect(null,mapDispatchToProps)(SearchContainer);