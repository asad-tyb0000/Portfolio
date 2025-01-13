import { useState } from 'react'
import './block.css'

function Block() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class = "blockdiv">
        <h1 class = "nameHeading">Muhammad Asad</h1>
      </div>
    </>
  )
}

export default Block
