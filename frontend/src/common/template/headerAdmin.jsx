import React from 'react'
import Navbar from './navbar'

const Header = props => (
    <header className='main-header'>
        <a href="/#/admin" className='logo'>
            <span className='logo-mini'><b>Ak</b>L</span>
            <span className="logo-lg">
                <i className="fa fa-book"></i>
                <b> Aktie</b> Library
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)
export default Header