import Image from 'next/image'
import React from 'react'
import LoadingGif from "../public/images/gif/loading-arrow.gif"


function Loading() {
    return (
        <div className='loading'>
            <Image src={LoadingGif} alt="Loading..." />
        </div>
    )
}

export default Loading