import "./Catalog.css";
import { NewsCard } from "./NewsCard/NewsCard";

import { InsideNav } from "./InsideNav/InsideNav";
import { getAll } from "../services/newsServices";

import { useEffect, useState } from "react";

export const Catalog = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getAll()
            .then(result =>
                setNews(Object.values(result))
            );
    }, []);

    return (
        <div className="container">

            <InsideNav />

            {news.map(x => <NewsCard key={x._id} news={x} />)}
            <p className="pagination">Todo: Pagination</p>
        </div>
    );
}