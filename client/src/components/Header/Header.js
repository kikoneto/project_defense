import "./Header.css"

import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="main-nav">
            <div className="logo">
                <h4>Shade News</h4>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/catalog">Latest News</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    <Link to="/create">Upload News</Link>
                </li>
            </ul>

            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}