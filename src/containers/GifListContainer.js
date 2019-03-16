import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {data: []}
  }

  handleSearch = (q) => {
    let query = q
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res=>res.json())
      .then(json=>this.setState({data: json.data}))
  }

  componentDidMount() {
      this.handleSearch('puppies')
  }
    render() {
      return(<div>
        < GifSearch handleSearch={this.handleSearch}/>
        < GifList data={this.state.data}/>
        </div>)
    }
}

export default GifListContainer
