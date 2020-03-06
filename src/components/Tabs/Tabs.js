import React from "react";

class Tabs extends React.Component {
  render() {
    let tabs = this.props.song.map(song => {
      return (
        <ul class="list-group">
          <li class="list-group-item">{song.tabTypes}</li>
        </ul>
      );
    });
    return { tabs };
  }
}

export default Tabs;
