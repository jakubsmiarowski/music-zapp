import React from 'react';
import './Search.css'

class Search extends React.Component{

    constructor() {
        super();
        this.state = {
          searchText:'',
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
        .catch(error => console.log(error))
    }
    
      handleKeyUp(event){
        if (event.keyCode === 13) {
            this.props.onSubmit(this.state.searchText);
        }
    }

    render(){
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '50%'
        };
        return(
            <input
                type="text"
                style={styles}
                className="form-control"
                onSubmit={event => this.onSubmit(event)}
                onChange={event => this.onChangeHandle(event)}
                onKeyUp={this.handleKeyUp}
                placeholder="What song are you looking for?"
                value={this.state.searchText}
            />
        )
    }

}
export default Search;