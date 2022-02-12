import React from 'react';
import Loading from './Loading';
import Room from "./Room";

function RoomsList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately no room matchs your search parameter</h3>
            </div>
        )
    }

    return (
        <section className='roomslist'>
            <div className="roomslist-center">
                {rooms.map((item) => (
                    <Room key={item.id} room={item} />
                ))}
            </div>
        </section>
    )
}

export default RoomsList