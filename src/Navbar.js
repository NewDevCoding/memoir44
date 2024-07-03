import React from 'react'
import './styles.css' 
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='site-title'>
            <Link to="/">Memoir44</Link>
        </div>
        <ul>
            <li>
                 <Link to='/terrain'>Terrain</Link>
            </li>
            <li>
                 <Link to='/troops'>Troops</Link>
            </li>
            <li>
                 <Link to='/scenarios'>Scenarios</Link>
            </li>
            <li>
                 <Link to='/tactics'>Tactics</Link>
            </li>
            <li>
                 <Link to='/abacus'>Abacus</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

           