import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../Styles/header.css";

function Header() {
  return (
    <div className="flexconhead">
      <div className="headerName">
        <p>Asad Tayyab</p>
      </div>
      <div className="headercompscont">
        <div className="headercomps">
          <Link to="/">Home</Link> {/* Use Link for navigation */}
        </div>
        <div className="headercomps">
          <Link to="/about">About me</Link> {/* Link to About page */}
        </div>
        <div className="headercomps">
          <Link to="/projects">Service</Link> {/* Link to Service page */}
        </div>
        <div className="headercomps">
          <Link to="/projects">Projects</Link> {/* Link to Projects page */}
        </div>
      </div>
      <div className="button-container">
        <button className="headerButton">Contact Me</button>
      </div>
    </div>
  );
}

export default Header;
