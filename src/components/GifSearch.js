import React from 'react'

class GifSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="col-4">
        <br/>
        <form onSubmit={(e) => {
          this.props.onSubmit(e, this.state.searchTerm)
        }}
        >
          <div className="form-group">
            <label>Enter a Search Term:</label>
            <input type="text" className="form-control" value={this.state.searchTerm} onChange={this.handleChange} />
            <button type="submit" className="btn btn-primary">Find Gifs</button>
          </div>
        </form>
      </div>
    )
  }
}

export default GifSearch
