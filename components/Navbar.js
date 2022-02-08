import React, { useState } from 'react';
import logo from "../public/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToogle = () => {
        setIsOpen(isOpen ? false : true);
    }

    return (
        <nav className='navbar'>
            <div className="nav-center">
                <div className="nav-header">
                    <Link href="/" passHref>
                        <Image src={logo} alt="HotelX" />
                    </Link>
                    <button className="nav-btn">
                        <FaAlignRight className="nav-icon" onClick={handleToogle} />
                    </button>
                </div>
                <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                    <li>
                        <Link href="/" passHref>Home</Link>
                    </li>
                    <li>
                        <Link href="/rooms" passHref>Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
