import React, { useState } from 'react'

const Event01 = () => {
    // 클릭이벤트
    const [ count, setCount ] = useState(0);
    const handleClick = () => setCount(count+1);
    return (
        <>
            <p>클릭횟수 : {count}</p>
            <button onClick={handleClick}>클릭</button>
        </>
    )
}

export default Event01