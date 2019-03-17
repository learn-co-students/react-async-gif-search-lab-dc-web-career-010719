import React, {Component} from 'react'

class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      query: null
    }
  }

  handleSearchChange = event => {
    this.setState({query: event.target.value})
  }

  handleSubmit = event => {
    console.log(this.state.query)
    event.preventDefault()
    this.props.onSearch(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleSearchChange}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default GifSearch
