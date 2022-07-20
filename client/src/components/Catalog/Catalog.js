import "./Catalog.css";
import { NewsCard } from "./NewsCard/NewsCard";
import { InsideNav } from "./InsideNav/InsideNav";

import { getAll } from "../../services/newsServices";

import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState, useContext } from "react";

export const Catalog = () => {
    const { user } = useContext(AuthContext);

    const [news, setNews] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setNews(Object.values(result));
            });

    }, []);

    return (
        <div className="container">

            <div className="container-div">
                <InsideNav />
            </div>

            {news.map(x => <NewsCard key={x._id} news={x} />)}
        </div>
    );
}