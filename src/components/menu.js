import React from 'react'
import { Link } from "gatsby"
import "../components/my-style.css"

const Menu = () => 
    (
       

        <ul class = "menuUL"> 
            <li><Link to="/">Work</Link></li>
            <li><Link to="/page-2/">About</Link></li>
            
        </ul>
        
    )


export default Menu;