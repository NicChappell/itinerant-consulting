// import dependencies
import React from 'react'
import { Link } from "react-scroll"

// import images
import logo from '../img/logo/logo.svg'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="page-top"
                    smooth={true}
                    offset={-72}
                    duration={500}
                >
                    <img src={logo} alt="Itinerant Consulting" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-72}
                                duration={500}
                            >
                                Services
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-72}
                                duration={500}
                            >
                                Portfolio
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-72}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-72}
                                duration={500}
                            >
                                Team
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-72}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation