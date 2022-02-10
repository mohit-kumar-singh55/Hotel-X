import React, { useContext } from 'react';
import { RoomContext } from '../Context/context';
import Loading from "./Loading";
import Room from './Room';
import Title from './Title';

function FeaturedRooms() {
    const { featuredRooms: rooms, loading } = useContext(RoomContext);

    return (
        <section className='featured-rooms'>
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading />
                    : rooms.map((room) => (
                        <Room key={room.id} room={room} />
                    ))}
            </div>
        </section>
    )
}

export default FeaturedRooms