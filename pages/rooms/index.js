import React from 'react';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
import Link from 'next/link';
import RoomsContainer from '../../components/RoomsContainer';

function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms" subtitle="">
                    <button className="btn-primary" >
                        <Link href="/" passHref>
                            Return Home
                        </Link>
                    </button>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    );
}

export default Rooms;
