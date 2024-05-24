import { useState } from 'react'
import reactLogo from './assets/cat.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Es sēžu ļoti normāli, neko nezinu :)</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Mjau</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Mjau count is {count}
        </button>
      </div>
    </>
  )
}

export default App
