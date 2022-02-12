import React, { useContext } from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from "./Loading";
import { RoomContext } from "../Context/context";

function RoomsContainer() {
    const { loading, sortedRooms, rooms } = useContext(RoomContext);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}

export default RoomsContainer