import "./Header.css"

export const Header = () => {
    return (
        <nav className="main-nav">
            <div className="logo">
                <h4>Shade News</h4>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="/">Latest News</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
                <li>
                    <a href="/">Register</a>
                </li>
                <li>
                    <a href="/">Logout</a>
                </li>
                <li>
                    <a href="/">Upload News</a>
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