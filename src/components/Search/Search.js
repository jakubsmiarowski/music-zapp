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

  handleSearch = () => {
    const searchTabs = Object.keys(this.state.isChecked).filter(
      keyTab => this.state.isChecked[keyTab]
    );

    if (this.state.searchText.length > 2) {
      this.props.onSearch(this.state.searchText, searchTabs);
    }
  };

  handleChange = e => {
    const searchText = e.target.value;
    this.setState({ searchText: searchText }, () => {this.handleSearch();});
  };


  toggleCheckboxChange = e => {
    this.setState({
      isChecked: {
        ...this.state.isChecked,
        [e.target.name]: !this.state.isChecked[e.target.name]
      }
    }, () => {
      this.handleSearch();
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control search"
          onChange={this.handleChange}
          placeholder="What are you looking for?"
          value={this.state.searchText}
        />
        {Object.keys(tabMap).map(tabKey => (
          <span key={tabKey}>
            <label htmlFor={tabKey}>{tabMap[tabKey]}</label>
            <input
              type="checkbox"
              name={tabKey}
              checked={this.state.isChecked[tabKey]}
              onChange={this.toggleCheckboxChange}
              className="checkbox"
            />
          </span>
        ))}
      </div>
    );
  }
}
export default Search;
