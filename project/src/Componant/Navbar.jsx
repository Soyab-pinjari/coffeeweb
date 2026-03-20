import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
      <h1>Coffo</h1>

      <div className="options">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
