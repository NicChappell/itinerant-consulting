// import dependencies
import React from 'react'

const Services = () => {
    return (
        <section className="page-section bg-light" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">We solve problems.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-palette fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Design</h4>
                        <p className="text-muted">We strive to turn creative inspiration into quantifiable results.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-code fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Development</h4>
                        <p className="text-muted">Our engineering team enables your website to serve its true purpose: Generating business results.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-chart-line fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Analytics</h4>
                        <p className="text-muted">Unlock your full potential with custom analytics tailored to your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services