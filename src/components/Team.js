// import dependencies
import React from 'react'

// import images
import kay from '../img/team/kay.jpg'
import larry from '../img/team/larry.jpg'
import nic from '../img/team/nic.jpg'

const Team = () => {
    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Meet the people who make it happen.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={kay} alt="" />
                            <h4>Kay Garland</h4>
                            <p className="text-muted">Lead Designer</p>
                            {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={larry} alt="" />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Marketer</p>
                            {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={nic} alt="" />
                            <h4>Nic Chappell</h4>
                            <p className="text-muted">Lead Engineer</p>
                            {/* <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 mx-auto text-center">
                        <p className="large text-muted">
                            When your mission is to be better, faster and smarter, you need the best people driving your vision forward.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team