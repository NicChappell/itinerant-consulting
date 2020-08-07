// import dependencies
import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    // state hook variables
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const sendEmail = e => {
        e.preventDefault()

        // create payload
        const payload = {
            email,
            message,
            name,
            phone
        }

        // post payload
        axios.post('/contact', { ...payload })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Let us know what's on your mind.</h3>
                </div>
                <form id="contactForm">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    autoComplete="name"
                                    className="form-control"
                                    id="name"
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder="Your Name"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input
                                    autoComplete="email"
                                    className="form-control"
                                    id="email"
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Your Email"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input
                                    autoComplete="tel"
                                    className="form-control"
                                    id="phone"
                                    onChange={e => setPhone(e.target.value)}
                                    type="tel"
                                    placeholder="Your Phone"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder="Your Message"
                                >
                                </textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button
                            className="btn btn-primary btn-xl text-uppercase"
                            id="sendMessageButton"
                            onClick={sendEmail}
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact