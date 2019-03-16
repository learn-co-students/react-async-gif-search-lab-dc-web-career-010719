import React from 'react' 

export default props => {


  return (
    <div>
      <h3>Enter a Search Term:</h3>
      <form onSubmit={props.handleSearch}>
        <input type='text' name='search' onChange={props.onChange} value={props.searchTerm} />
        <button type='submit'>Find Gifs</button>
      </form>
    </div>
  )
}