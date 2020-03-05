import React from 'react';
import './Search.css'

class Search extends React.Component{

    constructor() {
        super();
        this.state = {
          searchText:'',
        }
      }
    
      handleChange(event){
        let searchingText = event.target.value;
        this.setState({searchingText: searchingText});
    
        if (searchingText.length > 2) {
          this.props.onSearch(searchingText);
        }
      }
    
    handleKeyUp(event){
        if (event.keyCode === 13) {
            this.props.onChange(this.state.searchText);
        }
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder="What song are you looking for?"
                    value={this.state.searchText}
                />
                <button type="button" class="btn btn-light" onClick>Submit</button>
            </div>
        )
    }

}
export default Search;