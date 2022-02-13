import React, { useContext } from 'react';
import { RoomContext } from "../Context/context";
import Title from "./Title";

const getUnique = (items, value) => {
    return [...new Set(items.map((item => item[value])))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);

    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["all", ...types];

    // map to jsx
    types = types.map((item, index) => (
        <option value={item} key={index}>{item}</option>
    ))

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => (
        <option value={item} key={index}>{item}</option>
    ))

    return (
        <section className='filter-container'>
            <Title title="Search Rooms" />
            <form className='filter-form'>
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* guest type */}
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end of guest type */}
            </form>
        </section>
    )
}

export default RoomsFilter