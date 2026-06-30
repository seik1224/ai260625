import React from 'react'
import bg from '../assets/hero.png';

const Step08 = () => {
    return (
        <>
            {/* 1. public폴더 이미지 불러오기 */}
            <img src='favicon.svg' />

            {/* 2. css이미지 파일 불러오기 */}
            <div className='bg-main'></div>

            {/* 3. src에서 이미지 불러오기 */}
            <img src={bg} />

            {/* 4 */}
            <div
                className='w-40 h-40 bg-cover'
                style={{backgroundImage:'url(favicon.svg)'}}
            >
            </div>
        </>
    )
}

export default Step08