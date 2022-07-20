import "../Catalog/Catalog.css";

import { AuthContext } from "../../contexts/AuthContext";

import { useParams, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { NewsCard } from "../Catalog/NewsCard/NewsCard";
import { getAll } from "../../services/newsServices";

export const MyNews = () => {

    const { user } = useContext(AuthContext);

    const [news, setNews] = useState([]);

    const params = useParams();
    useEffect(() => {
        getAll()
            .then(result => {
                const filteredNews = Object.values(result).filter(x => x._ownerId == user._id);
                setNews(filteredNews)
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