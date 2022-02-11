import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Banner from "../../components/Banner";
import Link from 'next/link';
import { RoomContext } from "../../Context/context";
import Image from 'next/image';
import SingleRoomHero from '../../components/SingleRoomHero';

function SingleRoom() {
    const router = useRouter();

    const { rooms } = useContext(RoomContext);
    const room = rooms.find((item) => item.slug === router.query.slug); // find the room with the slug

    if (!room) {
        return (
            <div className="error">
                <h3>No Such Room Found...</h3>
                <div className="btn-primary">
                    <Link href="/rooms">
                        Back To Rooms
                    </Link>
                </div>
            </div>
        )
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    console.log(room);

    const [mainImg, ...otherImg] = images;

    return (
        <>
            <SingleRoomHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <button className="btn-primary" >
                        <Link href="/rooms" passHref>
                            Back To Rooms
                        </Link>
                    </button>
                </Banner>
            </SingleRoomHero>
            <section className="single-room">
                <div className="single-room-images">
                    {otherImg.map((item, index) => (
                        <Image src={item} alt={name} key={index} />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>Size : {size} SQFT</h6>
                        <h6>Max Capacity : {capacity} {capacity > 1 ? "People" : "Person"}</h6>
                        <h6>{pets ? "Pets allowed" : "No pet allowed"}</h6>
                        <h6>{breakfast && "Free Breakfast Included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className='extras'>
                    {extras.map((item, index) => (
                        <li key={index}>- {item}</li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default SingleRoom;
