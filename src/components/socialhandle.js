import React from 'react'
import "../components/my-style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faMedium,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons'

import {faFileCode, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const SocialHandle = () => 
    (
       

        <div class = "socialContainer">
        
             <div class = "socialIcon"> <FontAwesomeIcon icon={faGithub} /> </div>
             <div class = "socialIcon"> <FontAwesomeIcon icon={faMedium} /> </div>
             <div class = "socialIcon"> <FontAwesomeIcon icon={faLinkedin} /> </div>
             <div class = "socialIcon"> <FontAwesomeIcon icon={faFileCode} /> </div>
             <div class = "socialIcon"> <FontAwesomeIcon icon={faEnvelope} /> </div>

        </div>
        
    )


export default SocialHandle;