import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About' // (create this component below)
import Profile from './Profile'


function App() {
  return (
    <div>
      {/* Navbar stays always visible */}
      <div className="navbar-wrapper">
        <div className="navbar navbar-expand-lg bg-dark navbar-dark px-4">
          <Link to="/">Home</Link>
          <Link to="/Favourites">Favourties</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>

      {/* Page content changes here */}
      <div style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<div>Under construction</div>} />
          <Route path="/faq" element={<div>under construction</div>} />
          <Route path="/settings" element={<div>under construction</div>} />
          <Route path="/Favourites" element={<div>under construction</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
