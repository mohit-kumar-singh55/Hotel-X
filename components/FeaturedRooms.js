import React, { useContext } from 'react';
import { RoomContext } from '../Context/context';
import Loading from "./Loading";

function FeaturedRooms() {
    const { featuredRooms: rooms } = useContext(RoomContext);
    console.log(rooms);

    return (
        <div>
            <Loading />
        </div>
    )
}

export default FeaturedRooms