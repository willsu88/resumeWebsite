import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => (
  /* Header is taken care of in layout page. */
  <Layout>
    

    {/* SEO shows the name on the browser tab. */}
    <SEO title="William Su" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


    <Link to="/page-2/">Go to page 2</Link>


  </Layout>
  /* Footer is taken care of in layout page. */
)

export default IndexPage
