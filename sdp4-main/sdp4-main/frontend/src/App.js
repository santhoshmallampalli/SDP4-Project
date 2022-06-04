import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import AdminLogin from './components/pages/AdminLogin'
import TouristLogin from './components/pages/TouristLogin'
import GuideLogin from './components/pages/GuideLogin'
import GuideRegister from './components/pages/Guideregister'
import TouristHome from './components/pages/TouristHome'
import axios from 'axios'
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/Adminlogin" component={AdminLogin}/>
                    <Route path="/TouristLogin" component={TouristLogin}/>
                    <Route path="/GuideLogin" component={GuideLogin}/>
                    <Route path="/Guideregister" component={GuideRegister}/>
                    <Route path="/TouristHome" component={TouristHome}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by SDP-4 DA Group38</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}