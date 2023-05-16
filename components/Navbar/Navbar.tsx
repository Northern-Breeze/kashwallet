import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

    const [isActive, setIsActive] = React.useState(false);
    const toggleNavBar = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className="navbar">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <div className='navbar-item'>
                        <Link href="/">
                            <Image className="image" src="/images/logo.png" alt="Kashwallet logo" height="100px" width="100%" />
                        </Link>
                    </div>
                    <button onClick={toggleNavBar} className={`navbar-burger ${isActive ? 'is-active' : ''}`} role="button" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link href="/about">
                            <div className="navbar-item">
                                About
                            </div>
                        </Link>
                        <Link className="navbar-item" href="/contact-us">
                            <div className='navbar-item'>
                                Contact Us
                            </div>
                        </Link>
                        <Link className="navbar-item" href="/services">
                            <div className='navbar-item'>
                                Services
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
