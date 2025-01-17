import { useState } from "react";
import "../Styles/header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flexconhead">
        <div class="headerName">
          <p>Asad Tayyab</p>
        </div>
        <div class="headercompscont">
          <div class="headercomps">
            <a href="#home">Home</a>
          </div>
          <div class="headercomps">
            <a href="#about">About me</a>
          </div>
          <div class="headercomps">
            <a href="#projects">Service</a>
          </div>
          <div class="headercomps">
            <a href="#projects">Projects</a>
          </div>
        </div>
        <div class="button-container">
          <button class="headerButton">Contact Me</button>
        </div>
      </div>
    </>
  );
}

export default Header;