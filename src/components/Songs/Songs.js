import React from "react";
import Tabs from "../Tabs/Tabs";

class Songs extends React.Component {
  constructor() {
    super();
    this.state = {
      tabTypes: []
    };
  }

  render() {
    let songs = this.props.songs.map(song => {
      return (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{song.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{song.artist.name}</h6>
            <Tabs tabTypes={this.state.tabTypes}/>
          </div>
        </div>
      );
    });
    return <div>{songs}</div>;
  }
}

export default Songs;
