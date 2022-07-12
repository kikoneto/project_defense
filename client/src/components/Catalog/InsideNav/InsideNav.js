import "./InsideNav.css"

export const InsideNav = () => {
    return (
        <div className="inside-nav-box">
            <nav className="inside-news-nav">
                <div className="inside-nav-header">
                    <h2>Sort News</h2>
                </div>
                <ul className="news-list">
                    <li>
                        <a href="technology">
                            <button>Technology</button>
                        </a>
                    </li>
                    <li>
                        <a href="sport">
                            <button>Sport</button>
                        </a>
                    </li>
                    <li>
                        <a href="entertainment">
                            <button>Entertainment</button>
                        </a>
                    </li>
                    <li>
                        <a href="science">
                            <button>Science</button>
                        </a>
                    </li>
                    <li>
                        <a href="health">
                            <button>Health</button>
                        </a>
                    </li>
                    <li>
                        <a href="business">
                            <button>Business</button>
                        </a>
                    </li>
                    <li>
                        <a href="marketing">
                            <button>Marketing</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}