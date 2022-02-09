import React, { useContext } from 'react';
import { RoomContext } from '../Context/context';

function FeaturedRooms() {
    const { featuredRooms: rooms } = useContext(RoomContext);
    console.log(rooms);

    return (
        <div>

        </div>
    )
}

export default FeaturedRooms