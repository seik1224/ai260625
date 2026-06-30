import React, { useState } from 'react'

const Event02 = () => {
    const [msg, setMsg] = useState('마우스');

    const handleMouseOver = () => setMsg('마우스HOVER');
    const handleMouseOut = () => setMsg('마우스OUT');
    return (
        <>
            {/* 버블링발생 */}
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {msg}
            </p>
            {/* 버블링 발생안함 */}
            <p onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
                {msg}
            </p>
        </>
    )
}

export default Event02