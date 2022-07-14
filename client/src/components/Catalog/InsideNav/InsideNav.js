import "./InsideNav.css";
import "../Catalog.css";
import { FilteredCatalog } from "../FilteredCatalog/FilteredCatalog";

import { Route, Routes, Link } from "react-router-dom";

export const InsideNav = () => {

    return (
        <div className="inside-nav-box">

            <section>
                <Routes>
                    <Route path="/technology" element={<FilteredCatalog />}></Route>
                    <Route path="/sports" element={<FilteredCatalog />}></Route>
                    <Route path="/entertainment" element={<FilteredCatalog />}></Route>
                    <Route path="/science" element={<FilteredCatalog />}></Route>
                    <Route path="/health" element={<FilteredCatalog />}></Route>
                    <Route path="/business" element={<FilteredCatalog />}></Route>
                    <Route path="/marketing" element={<FilteredCatalog />}></Route>
                </Routes>
            </section>


            <nav className="inside-news-nav">
                <div className="inside-nav-header">
                    <h2>Sort News</h2>
                </div>
                <ul className="news-list">
                    <li>
                        <Link to="technology">
                            <button>Technology</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="sports">
                            <button>Sport</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="entertainment">
                            <button>Entertainment</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="science">
                            <button>Science</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="health">
                            <button>Health</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="business">
                            <button>Business</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="marketing">
                            <button>Marketing</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}