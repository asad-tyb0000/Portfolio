import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/header.jsx'
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <Router>
      <div className="mainApp">
        <Header />
        <Home />
        <About />
        
      </div>
    </Router>
  );
}

export default App;
