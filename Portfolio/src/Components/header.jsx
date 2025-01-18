import "../Styles/header.css";

function Header() {
  return (
    <div className="flexconhead">
      <div className="headerName">
        <p>Asad Tayyab</p>
      </div>
      <div className="headercompscont">
        <div className="headercomps">
          <a href="#home">Home</a> {/* Link to Home section */}
        </div>
        <div className="headercomps">
          <a href="#about">About me</a> {/* Link to About section */}
        </div>
        <div className="headercomps">
          <a href="#service">Service</a> {/* Link to Service section */}
        </div>
        <div className="headercomps">
          <a href="#projects">Projects</a> {/* Link to Projects section */}
        </div>
      </div>
      <div className="button-container">
        <button className="headerButton">Contact Me</button>
      </div>
    </div>
  );
}

export default Header;
