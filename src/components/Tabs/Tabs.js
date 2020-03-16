import React from "react";

export const tabMap = {
  PLAYER: "Player",
  TEXT_GUITAR_TAB: "Guitar",
  CHORDS: "Chords",
  TEXT_BASS_TAB: "Bass"
}


class Tabs extends React.Component {
  render() {
    let tabs = this.props.tabTypes.map(tab => {
      return (
        <ul key={tab} className="list-group list-group-horizontal">
          <li className="list-group-item">{tabMap[tab]}</li>
        </ul>
      );
    });
    return <div>{ tabs }</div>;
  }
}

export default Tabs;
