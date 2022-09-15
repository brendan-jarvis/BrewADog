import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h2>Brew A Dog!</h2>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: 'hotpink' } : { color: 'black' }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favourites"
          style={({ isActive }) =>
            isActive ? { color: 'hotpink' } : { color: 'black' }
          }
        >
          Favourites
        </NavLink>
        <NavLink
          to="/search"
          style={({ isActive }) =>
            isActive ? { color: 'hotpink' } : { color: 'black' }
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/random"
          style={({ isActive }) =>
            isActive ? { color: 'hotpink' } : { color: 'black' }
          }
        >
          Random
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
