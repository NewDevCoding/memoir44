import React from 'react'
import './styles.css' 
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='site-title'>
            Memoir44
        </div>
        <ul>
           <li>
             <a href='/terrain'>Terrain</a>
           </li>
           <li>
             <a href='/troops'>Troops</a>
           </li>
           <li>
                <a href='/scenarios'>Scenarios</a>
           </li>
           <li>
                <a href='/tactics'>Tactics</a>
           </li>
           <li>
                <a href='/abacus'>Abacus</a>
           </li>
        </ul>
    </nav>
  )
}

export default Navbar

            // <li>
            //     <a href='/terrain'>Terrain</a>
            // </li>
            // <li>
            //     <a href='/troops'>Troops</a>
            // </li>
            // <li>
            //     <a href='/scenarios'>Scenarios</a>
            // </li>
            // <li>
            //     <a href='/tactics'>Tactics</a>
            // </li>
            // <li>
            //     <a href='/abacus'>Abacus</a>
            // </li>

            // <li>
            //     <Link to='/terrain'>Terrain</Link>
            // </li>
            // <li>
            //     <Link to='/troops'>Troops</Link>
            // </li>
            // <li>
            //     <Link to='/scenarios'>Scenarios</Link>
            // </li>
            // <li>
            //     <Link to='/tactics'>Tactics</Link>
            // </li>
            // <li>
            //     <Link to='/abacus'>Abacus</Link>
            // </li>