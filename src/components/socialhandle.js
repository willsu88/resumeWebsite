import React from 'react'
import "../components/my-style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faMedium,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons'
import Resume from '../resume.pdf';
import {faFileCode, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const SocialHandle = () => 
    (
       

        <div class = "socialContainer">

             <div class = "socialIcon"> 
                <a href = "https://github.com/willsu88" target ="blank">  
                    <FontAwesomeIcon icon={faGithub}  /> 
                </a>
             </div>
             <div class = "socialIcon"> 
                <a href = "https://www.linkedin.com/in/william-su1998/" target ="blank">  
                    <FontAwesomeIcon icon={faLinkedin}  /> 
                </a>
             </div>
             <div class = "socialIcon"> 
          
                <a href = {Resume}>   
                    <FontAwesomeIcon icon={faFileCode}  /> 
                </a>

             </div>
             <div class = "socialIcon"> 
                <a href = "mailto:William.Su@rice.edu">  
                    <FontAwesomeIcon icon={faEnvelope}  /> 
                </a>
             </div>
             <div class = "socialIcon"> 
                <a href = "https://medium.com/@ts47" target ="blank">  
                    <FontAwesomeIcon icon={faMedium}  /> 
                </a>
             </div>


        </div>
        
    )


export default SocialHandle;