/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./my-style.css"
import Header from "./header"
import Menu from "../components/menu"


const Layout = ({ children }) => (
  <StaticQuery
    query={queryData}
    render={data => (
      <>
        

        {/* Title */}
        <Header siteTitle={"William Su"} /> 
		 
		{/* Underline */}
		<hr>  
		</hr>
    
      {/* <div class ="menuContainer">
        <Menu/>
      </div> */}

        {/* Body */}
        <div className = "bodyWrapper">

			

			{/* Main */}
			<main>{children}</main>


        {/* Footer */}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const queryData = 
  graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `