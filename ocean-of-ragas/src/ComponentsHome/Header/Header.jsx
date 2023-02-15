import React from 'react'
import './style.css'
import { FiUsers } from 'react-icons/fi'
import { FiRefreshCw } from 'react-icons/fi'
import { TfiYoutube } from 'react-icons/tfi'


const Header = () => {
  return (
    <div>
        <div className="header__top">
            <div className="header__top__container">
                <div className="header__info">
                    <div className=" info header__visitor"> <FiUsers/>  Visitor Count : 116967</div>
                    <div className="info header__update"><FiRefreshCw />  Last Update : 01/02/2023</div>
                    <div className="info header__youtube"> <TfiYoutube /><a href='https://youtube.com' target="_blank">  See Demo On Youtube</a></div>
                </div>
                <div className="header__player">
                    <div className=" info header__audio">Now Playing : 5_Hindol.mp3</div>
                    <div className="header__player__control">
                        <audio controls>
                            <source src=""/>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header