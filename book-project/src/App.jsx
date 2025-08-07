import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import 모듈이름 from '파일경로'
// import Book from './Book'
import Library from './Library'

function App() {

  return (
    <>
      <div>도서관</div>
      <Library />
    </>
  )
}

export default App
