import React from 'react'

const Step03 = () => {
    // return 밖에서는 기존에 사용하던 방식으로 작성
    const handleClick = () => alert('버튼을 클릭함!');

    return (
        <>
            <button onClick={()=>alert('버튼을 클릭했습니다!')}>클릭</button>
            <button onClick={handleClick}>클릭</button>
        </>   
    )
}

export default Step03