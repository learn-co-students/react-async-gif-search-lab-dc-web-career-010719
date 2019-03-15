import React from 'react'

const GifList = (props) => {
  return (
    <div className="col-8">
      <ul className="list-group">
        {props.gifs.map((gif) => {
          return (
            <li>
              <img src={gif.images.original.url} alt="fun gif" className="list-group-item" key={gif.id} style={{'object-fit': 'cover', width: '100%', display: 'inline-block'}} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

      export default GifList
