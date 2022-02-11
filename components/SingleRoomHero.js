// import styled from "styled-components";
// import defaultImg from "../public/images/room-1.jpeg";

// const StyledHero = styled.header`
//     min-height: 60vh;
//     background: url(${props => (props.img ? props.img : defaultImg)}) center/cover no-repeat;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// export default StyledHero;

import React from 'react';
import Image from 'next/image';

function SingleRoomHero({ children, img }) {
    return <header className="single-room-hero">
        <Image src={img} alt="single room" />
        {children}
    </header>;
}

export default SingleRoomHero;