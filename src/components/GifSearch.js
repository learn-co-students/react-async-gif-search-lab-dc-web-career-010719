import React from 'react'

class GifSearch extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(event.target[0].value)
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="search"/>
      <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default GifSearch
