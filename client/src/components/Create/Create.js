import "./Create.css"
import { create } from "../../services/newsServices";

export const Create = () => {


    return (
        <div className="create">
            <div className="create-form-box">
                <h1>Create News</h1>
                <form className="create-form">
                    <label htmlFor="title">Title</label>
                    <input type="text" />
                    <label htmlFor="full_article">Full Article</label>
                    <input type="text" placeholder="Word limit 110" />
                    <label htmlFor="short_article">Short Version of the Article</label>
                    <input type="text" placeholder="Word limit 25" />
                    <label htmlFor="image_url">Image URL</label>
                    <input type="text" placeholder="exmp: https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRETW7ZQwdE8/v1/800x-1.jpg" />
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