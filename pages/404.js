import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Link from 'next/link';

function Error() {
    return (
        <Hero>
            <Banner title="Oops" subtitle="Looks like this page is not available">
                <button className="btn-primary" >
                    <Link href="/" passHref>
                        Return Home
                    </Link>
                </button>
            </Banner>
        </Hero>
    );
}

export default Error;
