import React from 'react'
import './styles.css' 
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='site-title'>
            <Link to="/">
            <img 
             className='logo-image'
             src={require('./logo.png')}
             height={100}
             width={100}   
             margin={10}       
             alt='logo'
             />
            </Link>
        </div>
        <ul>
            <li>
                 <Link to='/terrain'>Terrain</Link>
            </li>
            <li>
                 <Link to='/troops'>Troops</Link>
            </li>
            <li>
                 <Link to='/actions'>Actions</Link>
            </li>
            <li>
                 <Link to='/scenarios'>Scenarios</Link>
            </li>
            {/* <li>
                 <Link to='/tactics'>Tactics</Link>
            </li>
            <li>
                 <Link to='/abacus'>Abacus</Link>
            </li> */}
        </ul>
    </nav>
  )
}

export default Navbar

           