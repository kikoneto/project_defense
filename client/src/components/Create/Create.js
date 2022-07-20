import "./Create.css"
import * as newsServices from "../../services/newsServices";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


export const Create = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let title = form.get('title');
        let shortArticle = form.get('short_article');
        let fullArticle = form.get('full_article');
        let imageUrl = form.get('image_url');
        let topic = form.get('topic');

        const post = {
            imageUrl,
            topic,
            "avatarUrl": user.avatarUrl,
            "gender": user.gender,
            "email": user.email,
            "full_article": fullArticle,
            "short_article": shortArticle,
            title,
        }

        newsServices.create(post, user.accessToken)
            .then(res => {
                navigate(`/details/${res._id}`, { replace: true })
            });

    }

    return (
        <div className="create">
            <div className="create-form-box">
                <h1>Create News</h1>
                <form className="create-form" onSubmit={onSubmitHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" />
                    <label htmlFor="full_article">Full Article</label>
                    <input type="text" name="full_article" placeholder="Word limit 110" />
                    <label htmlFor="short_article">Short Version of the Article</label>
                    <input type="text" name="short_article" placeholder="Word limit 25" />
                    <label htmlFor="image_url">Image URL</label>
                    <input type="text" name="image_url" placeholder="exmp: https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRETW7ZQwdE8/v1/800x-1.jpg" />
                    <label htmlFor="topic">Topic</label>
                    <select id="topic" name="topic">
                        <option value="technology">Technology</option>
                        <option value="sport">Sport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="science">Science</option>
                        <option value="business">Business</option>
                        <option value="marketing">Marketing</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}