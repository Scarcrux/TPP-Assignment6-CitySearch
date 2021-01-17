import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ZipCard from './ZipCard'

class GetMoreData extends Component {
  constructor(props){
      super(props)
      this.state = {
          isLoaded: false,
          states: [],
          error: null
      }
  }

  componentDidMount() {
    this.props.zip.map((zip, index) => (
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            states: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    ))
    
  }

  

  render(){
    return(
        <p>{this.state.states}</p>
    )

  }
}

export default GetMoreData;