import React from 'react'
import logo from '../../Assets/Images/logo.png'
import './about.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaSitemap } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="about__head">
        <div className="about__logo">
        <Link to="/"><img src={logo} alt="Ocean Of Ragas" /></Link>
        </div>
        <div className="about__links">
          <div className="link__home">
          <AiOutlineHome /><Link to="/" className='home-link'>Home</Link>
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