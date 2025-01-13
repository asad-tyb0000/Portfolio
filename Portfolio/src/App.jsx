import { useState } from 'react'
import Block from './Components/block.jsx'
import SBlock from './Components/sblock.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class = "flexContainer">
        <Block />
        <SBlock />
      </div>
    </>
  )
}

export default App
