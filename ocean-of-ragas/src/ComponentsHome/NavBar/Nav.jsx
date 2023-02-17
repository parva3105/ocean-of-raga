import React from 'react'
import './nav.css'
import { FaTwitter , FaFacebookF , FaBars } from 'react-icons/fa'

const Nav = () => {
  return (
    <div>
        <div className="nav__head">
            <div className="topnav nav__elements" id='myTopNav'>
                <div className=" dropdown nav_intro">
                    <button className='dropbtn'>Introduction</button>
                    <div className="dropdown-content">
                        <a href="#">Genisis</a>
                        <a href="#">Content</a>
                        <a href="#">Homage to Parents</a>
                        <a href="#">Humble Submission</a>
                    </div>
                </div>
                <div className="dropdown nav_ragasearch">
                    <button className='dropbtn'>Raga Search</button>
                    <div className="dropdown-content">
                        <a href="#">Raga Search Wheel</a>
                        <a href="#">Find scale congruent Ragas</a>
                        <a href="#">Murchana Finder Table</a>
                        <a href="#">List of Audio files</a>
                        <a href="#">Master Lish of Ragas</a>
                        <a href="#">Recently Added Ragas</a>
                        <a href="#">Raga Information PDF Files</a>
                    </div>
                </div>
                <div className="dropdown nav_students">
                    <button className='dropbtn'>Student's Corner</button>
                    <div className="dropdown-content">
                        <a href="#">Pandit Bhaktande's Vision</a>
                        <a href="#">Informative Articles</a>
                        <a href="#">Practical Demonstrations</a>
                        <a href="#">Publications and Research</a>
                        <a href="#">Refrences on Internet</a>
                    </div>
                </div>
                <div className="dropdown nav_ragaofthemonth">
                    <button className='dropbtn'>Raga Of the Month</button>
                    <div className="dropdown-content">
                        <a href="#">Current Month</a>
                        <a href="#">Archive of ROTM Aritcles</a>
                    </div>
                </div>
                <div className="dropdown nav_gems">
                    <button className='dropbtn'>Gems of Pt.yashwant Mahale's Archive</button>
                    <div className="dropdown-content">
                        <a href="#">Overview of Bhaktande's Literature</a>
                        <a href="#">Directory of Pandit V N Bhaktande's literature</a>
                    </div>
                </div>
                <div className="dropdown nav_contact">
                    <button className='dropbtn'>Contact Us</button>
                    <div className="dropdown-content">
                        <a href="#">Contact Details</a>
                        <a href="#">Acknowledgment and Credits</a>
                        <a href="#">Copyrights</a>
                        <a href="#">Updates</a>
                    </div>
                </div>
                <div className="dropdown nav_socials">
                    <button className='dropbtn'>Socials</button>
                    <div className="dropdown-content">
                        <a href="#"><FaFacebookF/>Facebook</a>
                        <a href="#"><FaTwitter />Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav