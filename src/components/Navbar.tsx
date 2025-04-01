import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;