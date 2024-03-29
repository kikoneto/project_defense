import "../Catalog/Catalog.css";

import { AuthContext } from "../../contexts/AuthContext";

import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { NewsCard } from "../Catalog/NewsCard/NewsCard";
import { getAll } from "../../services/newsServices";

export const MyNews = () => {

    const { user } = useContext(AuthContext);

    const [news, setNews] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                const filteredNews = Object.values(result).filter(x => x._ownerId === user._id);
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

            {
                news.length
                    ? news.map(x => <NewsCard key={x._id} news={x} />)
                    : <h1>No uploaded news</h1>
            }

        </div>
    );
}