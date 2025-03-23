import { Link } from 'react-router-dom';
import Home from './Home';

const Navbar = () => {
    return (
      <nav className="navbar" style={{ backgroundColor: 'grey', textAlign: 'center' , display:'flex' , justifyContent:'center' }}>
        <ul className="nav-links">
          <li style={{ padding: '40px', textAlign: 'center' }}><Link to="/">Home</Link></li>
          <li style={{ padding: '40px', textAlign: 'center' }}><Link to="/about">About</Link></li>
          <li  style={{ padding: '40px', textAlign: 'center' }}><Link to="/services">Services</Link></li>
          <li  style={{ padding: '40px', textAlign: 'center' }}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;