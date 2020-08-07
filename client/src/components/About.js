// import dependencies
import React from 'react'

// import images
import boulder from '../img/photos/boulder.jpg'
import fortWorth from '../img/photos/fort-worth.jpg'
import sanFrancisco from '../img/photos/san-francisco.jpg'

const About = () => {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">From past, to present and beyond.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src={fortWorth} alt="" />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2008-2013</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Itinerant Consulting was founded in studio apartment in Fort Worth, Texas focused on small business solutions for local start-ups
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src={sanFrancisco} alt="" />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2014</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    After relocating to San Francisco, California Itinerant Consulting officially went into business and began expanding
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src={boulder} alt="" />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2018</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Now based in Boulder, Colorado our team and services continue to grow
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About