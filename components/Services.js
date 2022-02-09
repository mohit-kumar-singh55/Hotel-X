import React from 'react';
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa"

function Services() {
    const services = [
        {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!"
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!"
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!"
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!"
        },
    ];

    return (
        <section className='services'>
            <Title title="Services" />
            <div className="services-center">
                {services.map((item) => (
                    <article key={item.title} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Services;