import './App.css'
import Step01 from './step/step01'
import Step02 from './step/step02'
import Step03 from './step/step03'

function App() {

  return (
    <>
      {/* 컴포너틑 : 재사용가능한 코드조각(버튼, 텍스트, 이미지 등등...) */}
      <Comp></Comp>
      <Comp></Comp>
      <Comp />
      <Step01 />
      <Step02 />
      <Step03 />
    </>
  )
}

// 같은 파일에서 컴포넌트 생성
// 긴 HTML을 한 단어로 깔끔하게 치환할 수 있는 문법, 작명시 영어대문자로 시작
// 함수표현식, 함수선언식 둘 다 가능

function Comp(){
  return <div>컴포넌트</div>
}

export default App
