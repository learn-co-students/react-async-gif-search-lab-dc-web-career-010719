import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      gifs: [],
      searchTerm: ''
    }
  }

  submitHandler = () =>{

  }

  onChange = (e) => {
    this.setState({searchTerm: e.target.value})
    console.log(this.state.searchTerm)

  }

  handleSearch = (e) => {
    e.preventDefault()
    // debugger
    // console.log(this.state.searchTerm)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(res => this.setState({gifs: res.data.slice(0, 3)}))
    .then(e.target.reset())

  }

  render(){
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSearch={this.handleSearch} onChange={this.onChange} searchValue={this.state.searchTerm} />
      </div>
    )
  }
}