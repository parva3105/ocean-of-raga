import React from 'react'
import logo from '../../Assets/Images/logo.png'
import './about.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaSitemap } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="about__head">
        <div className="about__logo">
          <img onClick={ () => navigate("/")}  src={logo} alt="Ocean Of Ragas" />
        </div>
        <div className="about__links">
          <div className="link__home">
          <AiOutlineHome /><button onClick={ () => navigate("/")}>Home</button>
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