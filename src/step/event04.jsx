import React, { useState } from 'react'

const Event04 = () => {
    // 체인지이벤트

    const [inputVal, setInputVal] = useState('');
    const handleChange = (e) => setInputVal(e.target.value);
    const resetInput = () => setInputVal('');

    return (
        <>
            <input
                type="text"
                onChange={handleChange}
                placeholder='키를 눌러보세요'
            />
            <p>{inputVal}</p>
            <button onClick={resetInput}>Reset</button>
        </>
    )
}

export default Event04