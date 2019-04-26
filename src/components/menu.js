import React from 'react'
import { Link } from "gatsby"
import "../components/my-style.css"

const Menu = () => 
    (
       
        <div class = "menuContainer"> 
            <ul> 
                <li><Link to="/">Work</Link></li>
                <li><Link to="/page-2/">About</Link></li>
                
            </ul>
        </div>
    )


export default Menu;