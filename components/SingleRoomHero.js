import React from 'react';
import Image from 'next/image';

function SingleRoomHero({ children, img }) {
    return <header className="single-room-hero">
        <Image src={img} alt="single room" />
        {children}
    </header>;
}

export default SingleRoomHero;