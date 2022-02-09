import React, { useContext } from 'react';
import { RoomContext } from '../Context/context';

function FeaturedRooms() {
    const value = useContext(RoomContext);

    return (
        <div>
            {value}
        </div>
    )
}

export default FeaturedRooms