import React from 'react'

// BEM Block, Element, Modifier

// Functional component design
function Header() {
  return (
    <div className="header">
        <h1 className="header__title">This is the Header</h1>
        <h2 className='header__user'>Sonny is signed in</h2>
    </div>
  )
}

export default Header