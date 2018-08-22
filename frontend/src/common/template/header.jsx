import React from 'react'

const Header = props => (
    <header className='main-header'>
        <a href="/#/" className='logo'>
            <span className='logo-mini'><b>Ak</b>L</span>
            <span className="logo-lg">
                <i className="fa fa-book"></i>
                <b> Aktie</b> Library
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)
export default Header