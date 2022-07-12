import { Link, Route, Routes, Navigate } from "react-router-dom";

export const NewsCard = ({
    news
}) => {
    return (
        <div className="card">

            <section>
                <Routes>
                    <Route path={`/details/${news._id}`} element={<Navigate replace to={`/details/${news._id}`} />} />
                    <Route path={`/edit/${news._id}`} element={<Navigate replace to={`/edit/${news._id}`} />} />
                </Routes>
            </section>


            <div className="card__header">
                <img src={news.imageUrl} alt="card__image" className="card__image " width="500" height="300" />
            </div>
            <div className="card__body">
                <span className="tag tag-blue">{news.topic}</span>
                <h4>{news.title}</h4>
                <p>{news.short_article}</p>
            </div>
            <div className="card__footer">
                <div className="user">
                    <img src={news.avatarUrl} alt="user__image" className="user__image" />
                    <div className="user__info">
                        <h5>{news.email}</h5>
                    </div>
                </div>
            </div>
            <div className="action-buttons">

                <Link to={`details/${news._id}`}><button className="tag tag-brown">Details</button></Link>
                <Link to={`edit/${news._id}`}><button className="tag tag-pink">Edit</button></Link>
                <button className="tag tag-red">Delete</button>

            </div>
        </div>
    );
}