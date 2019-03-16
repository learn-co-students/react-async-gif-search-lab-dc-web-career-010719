import React from 'react'

const GifList = props => {
  return (
    <ul>
      {props.data.map(gif => <li style={{listStyleType: 'none'}}><img key={gif.images.original.url} src={gif.images.original.url} alt="gif"/></li>)}
    </ul>
  )
}
export default GifList
