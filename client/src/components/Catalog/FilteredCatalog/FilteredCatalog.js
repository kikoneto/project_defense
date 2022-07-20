import "../Catalog.css"
import { useParams, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { NewsCard } from "../NewsCard/NewsCard";
import { getAll } from "../../../services/newsServices";

export const FilteredCatalog = () => {
    const [news, setNews] = useState([]);

    const params = useParams();
    useEffect(() => {
        getAll()
            .then(result => {
                const filteredNews = Object.values(result).filter(x => x.topic.toLowerCase() === params.filter);
                setNews(filteredNews);
            });
    }, []);

    return (
        <div className="container">
            <section>
                <Routes>
                    <Route path={`/details/${news._id}`} element={<Navigate replace to={`/details/${news._id}`} />} />
                    <Route path={`/edit/${news._id}`} element={<Navigate replace to={`/edit/${news._id}`} />} />
                </Routes>
            </section>
            {news.map(x => <NewsCard key={x._id} news={x} />)}
            <p className="pagination">Todo: Pagination</p>
        </div>
    );
}