import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar has-shadow">
        
            <div className="navbar-menu" id="nav-links">

                <div className="navbar-start">
                    <img src="assets/dino-logo.png" style={{height: 96}} className="py-2 px-6" alt="site logo" />
                    <Link className="navbar-item is-size-3 has-text-weight-bold" to="/">Dinosaur API</Link>
                </div>
                
                <div className="navbar-end py-2 px-6">
                    <Link className="navbar-item is-size-3 has-text-weight-bold" to="/">Home</Link>
                    <Link className="navbar-item is-size-3 has-text-weight-bold" to="/about">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)