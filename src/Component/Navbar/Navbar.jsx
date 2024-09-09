import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <span className="nav-title"></span>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}
