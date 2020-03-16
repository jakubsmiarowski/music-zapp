import React from "react";
import axios from "axios";
import "./App.css";
import Songs from "./components/Songs/Songs";
import Search from "./components/Search/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchingText: "",
      songs: []
    };
  }

  getSong = async searchingText => {
    const API_URL = "https://www.songsterr.com/";
    const response = await axios.get(
      API_URL + "a/ra/songs.json?pattern=" + searchingText
    );
    return response.data;
  };

  handleSearch = async (searchingText, searchingTabs) => {
    this.setState({
      loading: true
    });
    const songs = await this.getSong(searchingText);
    const tabsFilteredSongs = songs.filter(song=> (
      searchingTabs.every(t=>song.tabTypes.includes(t))
    ))
    this.setState({
      searchingText: searchingText,
      songs: tabsFilteredSongs,
    });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <Search onSearch={this.handleSearch} />
        <Songs songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
