import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Know the value of historical monuments</h1>
            <p className="main-para text-center">Click below to login/register</p>
            <div className="buttons text-center">
                <Link to="/Adminlogin">
                    <button className="primary-button">Admin</button>
                </Link>
                <Link to="/Touristlogin">
                    <button className="primary-button" id="reg_btn"><span>Tourist</span></button>
                </Link>
                <Link to="/Guidelogin">
                    <button className="primary-button" id="reg_btn"><span>Guide</span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}