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
    <SEO title="William Su" keywords={[`William Su`, `Will Su`, `resume`, 'tech', 'jobs', 'intern']} />
    
    <div class ="container">
      
      <div class = "imageWrapper">
          <Image />
        </div>
        
        <b>Hi, I'm Will Su!  
        </b>

        <p>
          <br></br>
          I am currently a rising junior at Rice University (Houston, Texas). 
          I will be graduating with both the B.A. in Computer Science and Masters of Computer Science
          in 2021. From kindergarten to highschool, I studied at an international school in Shanghai, China.
        </p>
    
    </div>

    <div class ="container">
          <b> Projects </b>
          <p>
            1. &nbsp;  Hedwig - a team of 7, under the <a href ="https://riceapps.org/" class = "link" target ="blank">RiceApps</a> organization,
            that is building an iOS delivery app exclusively for vendors on the Rice Campus.<br></br>
            Currently, the app has gone through a beta launch and will be ready for an official launch in Fall 2019.
            My main contribution is building the Vendor-side app, using technologies such as React Native, GraphQL, and Stripe. 
            This project challenged me as it was the first time I worked on a software project with a team, 
            but I did learn a lot about product management and development on the way!
            Checkout the Github repo <a href ="https://github.com/rice-apps/RiceDeliveryVendorFrontEnd" class = "link" target ="blank">here</a>.
          </p>

          <p>
            2. &nbsp; Goodreads Book Recommender - a machine learning project I collaborated with Jay Shi (Rice '21) that implemented 4
            different recommender systems to suggest books to Goodreads users based on their previous readings' ratings. The models
            we trained included <br></br>
            &nbsp;    &nbsp;   &nbsp;   1. User-user similarity <br></br>
            &nbsp;    &nbsp;   &nbsp;   2. Weighted user-user similarity <br></br>
            &nbsp;    &nbsp;   &nbsp;   3. Matrix Factorization <br></br>
            &nbsp;    &nbsp;   &nbsp;   4. Neural-network based matrix factorization.<br></br>
            From this project, I experienced what it means to gain intuition as we wrangled with a large data set
            and use that intuition to tune and build the best models. Make sure to check out our neat 
            <a href ="https://github.com/willsu88/GoodreadsProject" class = "link" target ="blank"> visualizations</a> and Jupyter notebooks!
            
          </p>

          <br></br>
          <b> Work </b>
          <p>
            This summer I will be working at <a href ="https://www.experoinc.com/" class = "link" target ="blank">Expero</a> 
            , a tech consulting firm based in Houston, Teaxs, as a Software Engineering Intern from May to July 2019. 
            <br></br>

            <br></br>
            Last summer in Shanghai, China, I worked at <a href ="https://www.lamresearch.com/" class = "link" target ="blank">Lam Research</a> as a Data Science
            Intern (July 2018 to August 2018). 
            This was my first exposure to data wrangling and cleaning - the "dirty work" beneath Data Science. 
            My tasks primarily focused on <br></br>
            &nbsp;       1. automating the data collection process through Python  <br></br>
            &nbsp;       2. managing <a href ="https://www.lamresearch.com/" class = "link" target ="blank"> CSBG </a> department's data on a local database on mySQL <br></br>
            &nbsp;       3. outputting data visualizations for bi-weekly meetings through <a href ="https://www.qlik.com/us/products/qlik-sense" class = "link" target ="blank">
            Qliksense </a> and 
            Matplotlib.
             
            
            <br></br>
            <br></br>
            Currently, I am also working part-time as an Operations Assistant at the Barbara and David Gibbs 
            <a href ="https://www.lamresearch.com/" class = "link" target ="blank"> Recreation Center</a>, a top 5 nationally ranked school recreation center!
            <br></br>
            <br></br>
            During high school, I worked as a tutor, teaching more than 8 students from 1st to 11th grade in 
            Physics, Algebra, Chemistry, and Writing.
    
          </p>
    </div>

  </Layout>
  /* Footer is taken care of in layout page. */
)

export default IndexPage
