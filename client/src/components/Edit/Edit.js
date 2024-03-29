import "./Edit.css";
import { editById, getById } from "../../services/newsServices";
import { newsAreValid } from "../../validation";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Edit = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [news, setNews] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getById(id)
            .then(res => setNews(res))
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let title = form.get('title');
        let shortArticle = form.get('shortArticle');
        let fullArticle = form.get('fullArticle');
        let imageUrl = form.get('imageUrl');
        let topic = form.get('topic');

        const post = {
            imageUrl,
            topic,
            "avatarUrl": news.avatarUrl,
            "gender": news.gender,
            "email": news.email,
            "full_article": fullArticle,
            "short_article": shortArticle,
            title,
            "_id": id
        }

        if (newsAreValid(title, shortArticle, fullArticle, imageUrl)) {
            editById(id, post, user.accessToken)
                .then(res => {
                    navigate(-1, { replace: true })
                })
        }
    }

    return (
        <div className="edit">
            <div className="edit-form-box">
                <h1>Edit News</h1>
                <form className="edit-form" onSubmit={onSubmitHandler}>
                    {/* ToDo Validation */}
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" defaultValue={news.title} />
                    <label htmlFor="full_article">Full Article</label>
                    <input type="text" name="fullArticle" defaultValue={news.full_article} />
                    <span>Word limit 100</span>
                    <label htmlFor="short_article">Short Version of the Article</label>
                    <input type="text" name="shortArticle" defaultValue={news.short_article} />
                    <span>Word limit 25</span>
                    <label htmlFor="image_url">Image URL</label>
                    <input type="text" name="imageUrl" defaultValue={news.imageUrl} />
                    <label htmlFor="topic">Topic</label>
                    <select id="topic" name="topic" defaultValue={news.topic}>
                        <option value="Technology">Technology</option>
                        <option value="Sport">Sport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Science">Science</option>
                        <option value="Business">Business</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}