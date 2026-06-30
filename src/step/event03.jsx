import React, { useState } from 'react'

const Event03 = () => {
    // 마우스무브
    const [mouseP, setMouseP] = useState({x:0,y:0});

    const handleMouseMove = (e) => setMouseP({x:e.clientX,y:e.clientY});
    return (
        <>
            <div 
                onMouseMove={handleMouseMove}
                className='h-50 bg-red-200 flex items-center justify-center'
            >
                <p>{mouseP.x}, {mouseP.y}</p>
            </div>
        </>
    )
}

export default Event03