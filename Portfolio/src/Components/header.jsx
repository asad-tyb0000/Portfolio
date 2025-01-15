import { useState } from 'react'
import './header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class = "flexconhead">
        <div class = "headerName"><p>Asad Tayyab</p></div>
        <div class="headercompscont">
        <div class = "headercomps"><p>Home</p></div>
        <div class = "headercomps"><p>About me</p></div>
        <div class = "headercomps"><p>Projects</p></div>
        <div class = "headercomps"><p>Contact</p></div>
        </div>
      </div>
    </>
  )
}

export default Header