// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./my-style.css"

const Header = ({ siteTitle }) => (
  
  <header>
    <div className = "headerWrapper">

      <h1>
          {siteTitle}
        
      </h1>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
