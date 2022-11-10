import * as React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar py-4">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img className="image" src="/images/logo.png" alt="2pay logo" height="100px"/>
                    </a>
                    <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start"><a className="navbar-item" href="#">About</a><a className="navbar-item"
                        href="#">Company</a><a className="navbar-item" href="#">Services</a></div>
                    <div className="navbar-item">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                            <div className="control">
                                <button className="button" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                                        style={{ width: '24px', height: '24px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
