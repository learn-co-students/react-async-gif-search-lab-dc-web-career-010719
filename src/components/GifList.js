import React, {Component} from 'react'

const GifList = props => {
  let gifs = props.gifs.map(gif => <li><img key={gif.url} src={gif.url}/></li>)
  return (
    <ul>
      {gifs}
    </ul>
  )
}

export default GifList
