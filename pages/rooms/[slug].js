import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import defaultBcg from "../../public/images/defaultBcg.jpeg";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Link from 'next/link';
import { RoomContext } from "../../Context/context";

function SingleRoom() {
    const router = useRouter();

    const { rooms } = useContext(RoomContext);
    console.log(rooms);
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

    return (
        <Hero className="roomsHero">
            <Banner title={`${name} room`}>
                <button className="btn-primary" >
                    <Link href="/rooms" passHref>
                        Back To Rooms
                    </Link>
                </button>
            </Banner>
        </Hero>
    );
}

export default SingleRoom;
