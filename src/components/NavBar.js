import React from 'react'

function NavBar(props){
  const colors = {
    black: 'navbar-dark bg-dark',
    white: 'navbar-light'
  }

  return (
    <nav className={`navbar ${colors[props.color]}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' style={{color: 'white'}}>
            { props.title }
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
