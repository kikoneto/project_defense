import "./Details.css";

import { Link, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { getById } from "../services/newsServices";

export const Details = () => {

    const [news, setNews] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getById(id)
            .then(result => {
                setNews(result)
            })
    }, []);

    return (
        <div className="details-box">

            <section>
                <Routes>
                    <Route path={`/edit/${id}`} element={<Navigate replace to={`/edit/${id}`} />}></Route>
                </Routes>
            </section>


            <div className="details-card">
                <div className="details-card__body">

                    <span className="details-tag tag-blue">{news.topic}</span>
                    <h4>{news.title}</h4>
                    <p>{news.short_article}</p>

                </div>

                <div className="details-card__image">
                    <img src={news.imageUrl} alt="-details-card__image" className="details-card__image" width="620" height="350" />
                </div>

                <div className="full-article">
                    <article>{news.full_article}</article>
                </div>

                <div className="details-card__footer">
                    <div className="details-user">

                        <img src={news.avatarUrl} alt="details-user__image" className="details-user__image" />

                        <div className="details-user__info">
                            <h5>{news.email}</h5>
                        </div>
                    </div>

                    <div className="details-action-buttons">

                        <Link to={`edit/${news._id}`} >
                            <button className="tag tag-pink">Edit</button>
                        </Link>

                        <button className="tag tag-red">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}