import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: []
    }
  }

  handleSubmit = (e, searchTerm) => {
    e.preventDefault()
    let gifs = []
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=3`)
    .then(res => res.json())
    .then(json => {
      let gifList = json.data
      gifList.forEach((gif) => {
        gifs.push(gif)
      })
      this.setState({gifs})
    })
  }

  render() {
    return (
      <div className="row">
        <GifList gifs={this.state.gifs} />
        <GifSearch onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default GifListContainer
