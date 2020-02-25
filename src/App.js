import React from 'react';
import './App.css';
import Song from './components/Song/Song';
//import Search from './components/Search/Search';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchText:'',
      songs:[]
    }
  }

  onChangeHandle(event) {
    this.setState({searchText: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    const {searchText} = this.state;
    const url = `http://www.songsterr.com/a/wa/song?id=${searchText}`;
    fetch(url)
    .then(res => res.text())
    .then((data) => {
      this.setState({ song: data })
    })
    .catch(console.log)
  }

  handleKeyUp(event){
    if (event.keyCode === 13) {
        this.props.onSubmit(this.state.searchText);
    }
}

  render(){
    return(
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            onSubmit={event => this.onSubmit(event)}
            onChange={event => this.onChangeHandle(event)}
            onKeyUp={this.handleKeyUp}
            placeholder="What song are you looking for?"
            value={this.state.searchText}/>
          <Song songs={this.state.songs} />
        </div>
    )
  }
}

export default App;
