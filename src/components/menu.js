import React from 'react'
import { Link } from "gatsby"
import "../components/my-style.css"

const Menu = () => 
    (
       

        <ul class = "menuUL"> 
            <li><Link to="/">My Work</Link></li>
            <li><Link to="/page-2/">About Me</Link></li>
            
        </ul>
        
    )


export default Menu;