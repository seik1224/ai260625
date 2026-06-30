import './App.css'
import Event01 from './step/event01'
import Event02 from './step/event02'
import Event03 from './step/event03'
import Event04 from './step/event04'
import Step01 from './step/step01'
import Step02 from './step/step02'
import Step03 from './step/step03'
import Step04 from './step/step04'
import Step05 from './step/step05'
import Step06 from './step/step06'
import Step07 from './step/step07'
import Step08 from './step/step08'

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
      <Step04 title='게시판제목' content='게시판내용' name='작성자' />
      <Step04 title='제목2' content='내용2' name='작성자2' red='red' />
      <Step05 />
      <Step06 />
      <Step07 />
      <Step08 />
      <Event01 />
      <Event02 />
      <Event03 />
      <Event04 />
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
