import React from "react";
import { tabMap } from "../Tabs/Tabs";
import "./Search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      isChecked: {
        CHORDS: true,
        PLAYER: true,
        TEXT_BASS_TAB: true,
        TEXT_GUITAR_TAB: true
      }
    };
  }

  handleChange = e => {
    const searchText = e.target.value;
    this.setState({ searchText: searchText }, () => {this.doSearch();});
    
  };

  doSearch = () => {
    const searchTabs = Object.keys(this.state.isChecked).filter(
      keyTab => this.state.isChecked[keyTab]
    );

    if (this.state.searchText.length > 2) {
      this.props.onSearch(this.state.searchText, searchTabs);
    }
  };

  toggleChange = event => {
    this.setState({
      isChecked: {
        ...this.state.isChecked,
        [event.target.name]: !this.state.isChecked[event.target.name]
      }
    }, () => {
      this.doSearch();
    });
  };

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
        {Object.keys(tabMap).map(tabKey => (
          <div key={tabKey}>
            <label htmlFor={tabKey}>{tabMap[tabKey]}</label>
            <input
              type="checkbox"
              name={tabKey}
              checked={this.state.isChecked[tabKey]}
              onChange={this.toggleChange}
            />
          </div>
        ))}
        <button type="button" className="btn btn-light" onClick={this.handleChange}>
          Submit
        </button>
      </div>
    );
  }
}
export default Search;
