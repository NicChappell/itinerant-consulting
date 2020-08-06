// import dependencies
import React from 'react'

// import components
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Masthead from './components/Masthead'
import Navigation from './components/Navigation'
// import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'

// import styles
import './App.css'

const App = () => {
    return (
        <div id="page-top">
            <Navigation />
            <Masthead />
            <Services />
            {/* <Portfolio /> */}
            <About />
            <Team />
            <Clients />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
