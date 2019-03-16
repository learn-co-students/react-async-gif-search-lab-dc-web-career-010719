import React from 'react'

export default props => {
  return (
        <ul>
      {props.gifs.map(gif => <li><img src={gif.images.original.url} alt={gif.images.original.url} /></li>)}
    </ul>
  )
}
