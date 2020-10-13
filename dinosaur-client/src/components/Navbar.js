import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar has-shadow">
        
            <div className="navbar-menu" id="nav-links">

                <div className="navbar-start">
                    <img src="assets/dino-logo.png" style={{height: 96}} className="py-2 px-6" alt="site logo" />
                </div>
                
                <div className="navbar-end px-6">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/about">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)