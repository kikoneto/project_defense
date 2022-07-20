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
        if (user._id) {
            getAll()
                .then(result => {
                    const filteredNews = Object.values(result).filter(x => x._createdOn);
                    const normalNews = Object.values(result);
                    const allNews = { ...normalNews, ...filteredNews };
                    setNews(Object.values(allNews))
                });
        } else {
            getAll()
                .then(result => {
                    setNews(Object.values(result));
                });
        }

    }, []);

    return (
        <div className="container">

            <InsideNav />

            {news.map(x => <NewsCard key={x._id} news={x} />)}
            <p className="pagination">Todo: Pagination</p>
        </div>
    );
}