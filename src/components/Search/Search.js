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
    
      handleKeyUp(event){
        if (event.keyCode === 13) {
            this.props.onChange(this.state.searchText);
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

    render(){
        return(
            <input
                type="text"
                className="form-control"
                onChange={event => this.onChangeHandle(event)}
                onKeyUp={this.handleKeyUp}
                placeholder="What song are you looking for?"
                value={this.state.searchText}
            />
        )
    }

}
export default Search;