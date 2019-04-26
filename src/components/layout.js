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
import SocialHandle from "../components/socialhandle"


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

    <div class = "socialContainer">
          <SocialHandle/>
        </div>
  
   
      <div class ="menuContainer">
        <Menu/>
      </div>
      
        {/* Body */}
        <div className = "bodyWrapper">

			

			{/* Main */}
			<main>{children}</main>

        <footer>
          Email: William.Su@rice.edu 
          <br>
        </br>
          Updated: 5/1/2019
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