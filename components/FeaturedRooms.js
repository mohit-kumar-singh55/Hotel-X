import React, { useContext } from 'react';
import { RoomContext } from '../Context/context';
import Loading from "./Loading";

function FeaturedRooms() {
    const { featuredRooms: rooms } = useContext(RoomContext);

    return (
        <div>
            <Loading />
        </div>
    )
}

export default FeaturedRooms