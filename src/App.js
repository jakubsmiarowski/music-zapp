import React from 'react';
import './App.css';
import Song from './components/Song/Song';
import Search from './components/Search/Search';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchingText: '',
      songs:[]
    }
  }

  componentWillMount(){
    fetch('https://www.songsterr.com/')
    .then(result => result.text)
    .then((data) => {
        this.setState({ song: data })
    })
    .catch(error => console.log(error))
  }

  getSong(searchingText){
    const API_URL = 'https://www.songsterr.com/';


    return new Promise(
      (resolve,reject) => {
          var url = API_URL + '/v1/gifs/random?api_key=&tag=' + searchingText;
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url);
          xhr.onload = function() {
              if (xhr.status === 200) {
                  var data = JSON.parse(xhr.responseText).data;
                  var gif = {
                      url: data.fixed_width_downsampled_url,
                      sourceUrl: data.url
                  };
                  resolve(gif);
              } else {
                  reject(new Error ('Error'));
              }
          };
          xhr.send();
      }
    )
  }

  handleSearch(searchingText) { 
    this.setState({
        loading: true  
      });
      this.getSong(searchingText) 
      .then(songs => {
        this.setState({ 
          searchingText: searchingText,
          songs: songs
        });
      });
    }

  render(){
    return(
        <div className="input-group mb-3">
          <Search onSearch={this.handleSearch}/>
          <Song songs={this.state.songs} />
        </div>
    )
  }
}

export default App;