import React from 'react'
import logo from '../../Assets/Images/logo.png'
import group_intruments from '../../Assets/Images/group-insturments1.jpg'
import './about.css'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="about__logo">
                <img src={logo} alt="" />
        </div>
        <div className="group_instruments">
            <div className="instruments">
                <img className="img_responsive" src={group_intruments} alt="" />
            </div>     
        </div>

        <div className="text__container">
            <div className="about__text1">
                <ul>
                    <li>Formally launched in December, 2010, though 
                        Collection of audios of rare Ragas commenced from 1990s</li>
                    <li>Curated archive of audio recordings of 850+ common and rare (Anwat) ragas </li>
                    <li>Interactive software search tools to empower students 
                        and connoisseurs to access information they require from the Data Base with the flick of a button</li>                    
                </ul>
            </div>
            <div className="about__text2">
                <ul>
                    <li>Online library of old books, hard copies of which are not available, for posterity;</li>
                    <li>Continual service to music lovers through periodical upgrades</li>
                    <li>Based in Pune, Maharashtra, India; but the web site has reached more than 1,00,000 visitors from 25 Countries </li>                
                </ul>
            </div>
        </div>

        <button onClick={ () => navigate("/home")} >Click Here</button>


    </div>
  )
}


export default About;