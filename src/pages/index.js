import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/my-style.css"


const IndexPage = () => (
  /* Header is taken care of in layout page. */
  <Layout>
    

    {/* SEO shows the name on the browser tab. */}
    <SEO title="William Su" keywords={[`gatsby`, `application`, `react`]} />

        
    <div class = "imageWrapper">
      <Image />
    </div>

    <p>Lorem ipsum congue laoreet donec orci dolor consectetur tempus, faucibus ante laoreet quisque viverra arcu blandit, mattis ligula interdum scelerisque feugiat netus laoreet.

      Velit ultricies adipiscing dapibus cursus fusce senectus nunc quis aliquet, curabitur maecenas vulputate class platea suspendisse gravida diam pretium, sapien tellus curabitur luctus morbi feugiat ante semper consequat lobortis morbi fames.

        Leo tellus suspendisse litora justo pellentesque eget quam id lobortis, ullamcorper dapibus neque a ad est varius id fermentum, adipiscing ultricies est magna erat dolor sit ipsum hac viverra tincidunt conubia.
    </p>

    <p>Now go build something great.</p>



    <Link to="/page-2/">Go to page 2</Link>


  </Layout>
  /* Footer is taken care of in layout page. */
)

export default IndexPage
