import React from 'react'

import "./holeNetworks.css"

import githubIcon from "../../../assets/icons/networks/github.svg"
import linkedinIcon from "../../../assets/icons/networks/linkedin.svg"
import whatsappIcon from "../../../assets/icons/networks/whatsapp.svg"

export const HoleNetworks = () => {
  return (
    <div className='hole-networks-container'>
        <a href="https://github.com/trenditIA" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="github" width={"30px"} height={"30px"}/>
        </a>
        <a href="https://www.linkedin.com/in/lucas-mart%C3%ADn-oviedo-79a012131/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="linkedin" width={"28px"} height={"30px"}/>   
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5493517604199& text=Hola!%Me%20interesó%20tu%20portfolio!">
          <img src={whatsappIcon} alt="whatsapp" width={"36px"} height={"30px"}/>
        </a>
        <a href="mailto:lucasoviedolucas@gmail.com">
          <p>lucasoviedolucas@gmail.com</p>
        </a>
    </div>
  )
}
