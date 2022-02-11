import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import defaultBcg from "../../public/images/defaultBcg.jpeg";
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

    return (
        <>
            <SingleRoomHero img={images[0]}>
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
                    {images.map((item, index) => (
                        <Image src={item} alt={name} key={index} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default SingleRoom;
