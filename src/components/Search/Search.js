import React from 'react';
import './Search.css'

class Search extends React.Component{

    getInitialState(){
        return{
            searchingText:''
        };
    }

    handleChange(event){
        let searchingText = event.target.value;
        this.setState({ searchingText: searchingText});

        if (searchingText.length > 2){
            this.props.onSearch(searchingText);
        }
    }

    handleKeyUp(event){
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchingText);
        }
    }

    render(){
        return(
            <div className="input-group mb-3">
                <input
                type="text"
                class="form-control"
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                placeholder="What song are you looking for?"
                />
                <div className="input-group-append">
                    <button class="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        )
    }

}
export default Search;