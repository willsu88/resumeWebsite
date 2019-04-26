import React from 'react'
import { Link } from "gatsby"
import "../components/my-style.css"

const Menu = () => 
    (
       

        <ul> 
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/page-2/">My Work</Link></li>
            
        </ul>
        
    )


export default Menu;