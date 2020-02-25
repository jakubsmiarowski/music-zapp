import React from 'react';
import './App.css';
import Song from './components/Song/Song';
import Search from './components/Search/Search';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      songs:[]
    }
  }

  onSearch(){

  }

  getSong(){
    
  }

  render(){
    return(
        <div className="input-group mb-3">
          <Search  />
          <Song songs={this.state.songs} />
        </div>
    )
  }
}

export default App;
