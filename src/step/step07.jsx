import React from 'react'

const Step07 = () => {
    // 반복문
    const students = ['짱구', '짱아', '흰둥이'];
    const friendList = [];

    for(let i=0; i<students.length; i++){
        friendList.push(<li key={i}>{students[i]}</li>)
    }
    
    return (
        <>
            <ul>{friendList}</ul>

            <ul>
                {
                    // key : 리액트에서 반복문을 사용할때
                    // 각 요소를 구분하기 위한 고유값
                    students.map((v,i)=>(
                        <li key={i}>{v}{i}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Step07