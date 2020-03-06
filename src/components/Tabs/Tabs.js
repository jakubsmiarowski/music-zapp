import React from "react";

class Tabs extends React.Component {
  render() {
    let tabs = this.props.tab.map(tab => {
      return (
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">{tab.tabTypes}</li>
        </ul>
      );
    });
    return <div>{ tabs }</div>;
  }
}

export default Tabs;
