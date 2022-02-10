import React from 'react';
import Image from "next/image";
import defaultImage from "../public/images/room-1.jpeg";
import Link from 'next/link';

function Room({ room }) {
    const { name, slug, images, price } = room;
    return (
        <article className='room'>
            <div className="img-container">
                <Image src={images[0] || defaultImage} alt="Room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <div className="btn-primary room-link">
                    <Link href={`/rooms/${slug}`}>Features</Link>
                </div>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}

export default Room