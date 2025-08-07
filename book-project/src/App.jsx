import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import 모듈이름 from '파일경로'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        hello! book-project!
      </div>
      <Book></Book>
    </>
  )
}

export default App
