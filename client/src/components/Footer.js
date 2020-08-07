// import dependencies
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col text-lg-left">Copyright © Itinerant Consulting, LLC {new Date().getFullYear()}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer