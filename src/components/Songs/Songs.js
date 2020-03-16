import React from "react";
import Tabs from "../Tabs/Tabs";

class Songs extends React.Component {

  render() {
    let songs = this.props.songs.map(song => {
      return (
        <div key={song.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{song.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{song.artist.name}</h6>
            <Tabs tabTypes={song.tabTypes} />
          </div>
        </div>
      );
    });
    return <div>{songs}</div>;
  }
}

export default Songs;
