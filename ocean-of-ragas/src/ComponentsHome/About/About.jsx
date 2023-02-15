import React from 'react'
import logo from '../../Assets/Images/logo.png'
import './about.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaSitemap } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <div className="about__head">
        <div className="about__logo">
          <img src={logo} alt="Ocean Of Ragas" />
        </div>
        <div className="about__links">
          <div className="link__home">
          <AiOutlineHome />  Home
          </div>
          <div className="link__sitemap">
          <FaSitemap /> SiteMap
          </div>
        </div>
    </div>
    </div>
  )
}

export default About