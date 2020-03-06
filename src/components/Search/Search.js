import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }

  handleChange = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText: searchText });

    if (searchText.length > 2) {
      this.props.onSearch(searchText);
    }
  }

  /*handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.props.onChange(this.state.searchText);
    }
  }*/

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="What song are you looking for?"
          value={this.state.searchText}
        />
        <button type="button" class="btn btn-light" onClick={this.handleChange}>
          Submit
        </button>
      </div>
    );
  }
}
export default Search;
