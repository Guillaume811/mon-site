import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className ={({ isActive}) => isActive ? 'active' : ''}>
                Accueil
            </NavLink>
            <NavLink to="/About" className ={({ isActive}) => isActive ? 'active' : ''}>
                A propos
            </NavLink>
        </nav>
    );
}

export default Navbar;