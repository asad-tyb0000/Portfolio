import { useState } from 'react'
import './App.css'
import Header from "./Components/header.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class = "flexContainer">
        <Header />
      </div>
    </>
  )
}

export default App
