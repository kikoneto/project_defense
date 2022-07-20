import "./Header.css"
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {

    const { user, logout } = useContext(AuthContext);

    let userNavigation = (
        <div className="nav-links-container">
            <li>
                <Link to="/logout">My News</Link>
            </li>
            <li>
                <Link to="/create">Upload News</Link>
            </li>
            <li>
                <Link to="/catalog" onClick={logout}>Logout</Link>
            </li>
        </div>
    );

    let guestNavigation = (
        <div>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </div>
    )

    return (
        <nav className="main-nav">
            <div className="logo">
                <h4>Shade News</h4>
                {user.email && <p>Welcome {user.email}</p>}
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/catalog">Latest News</Link>
                </li>

                {user.email
                    ? userNavigation
                    : guestNavigation
                }
            </ul>

            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}