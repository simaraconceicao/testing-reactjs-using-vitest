import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [text, setText] = useState('')

  function handleInput(e) {
    setText(e.target.value)
  }

  return (
    <div className={styles.app}>
      <img src="https://media2.giphy.com/media/D567hs4Dex0GEnAKOY/giphy.gif" alt="issa rae balançando a cabeça"/>
      
      <div className={styles.inputAndText}>
        <input onChange={handleInput} placeholder="Digite seu nome!"/>
        <h1>Hello, {text}</h1>
      </div>
    </div>
  )
}

export default App
