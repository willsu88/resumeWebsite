import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/my-style.css"
import Menu from "../components/menu"


const IndexPage = () => (
  /* Header is taken care of in layout page. */
  <Layout>
    

   
    {/* SEO shows the name on the browser tab. */}
    <SEO title="William Su" keywords={[`gatsby`, `application`, `react`]} />
    
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
          <b> Background</b>

          <p> 
              Before coming to college, I knew that I wanted to become an engineer as problem solving and critical thinking always excited me, 
              and I wanted my future work to directly, positively impact the world or the community I lived in.
              However, truth be told, like any confused highschool student, I didn't exactly know what kind of engineer I wanted to be. Mechanical, 
              industrial, enviromental... Every classical engineering major was at one point under my radar but never something I was truly certain about. 
              <br></br>
              <br></br>
              Ironically, the one thing I didn't consider for the longest time was software engineering because I was always somewhat skeptical and afraid of coding. 
              It always seemed like a <i>niche</i> skill or something you had to learn from a young age. During my last year of highschool, 
              when everyone was looking for easy classes to ride on for senioritis, I decided to challenge myself to take a class I had absolutely no 
              knowledge about: AP Computer Science. 
              <br></br>
              <br></br>
              Fast-foward today, I've fallen in love with the beauty and flexibility that coding gives me, allowing me to solve the same problem many different ways. 
              I've come to see and appreciate just how <i>general</i> and applicable software engineering actually is to the real life as technology is almost everyone in our world today.
              But, most unexpectedly, I've grown attached to that immense satisfaction in coding (that I believe every coder feels) when whatever I built runs smoothly and perfectly.
              I believe C.S is the easiest, fastest route for me to create a positive change. 
              <br></br>
              <br></br>
              Studying Computer Science is the best decision I've ever made in my academic career, and I'm curious and excited to see where it'll take me.
              
             
          </p>
          <br></br>

          <b> Interests </b>
          <p>
              Other than C.S, I enjoy playing basketball and photographing the world as I travel to different places. 
              I also grew up medidating regularly and am currently learning yoga. 
          </p>
  

    </div>

  </Layout>
  /* Footer is taken care of in layout page. */
)

export default IndexPage
