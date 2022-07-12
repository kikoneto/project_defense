import "./Edit.css";

export const Edit = () => {
    return (
        <div className="edit">
            <div className="edit-form-box">
                <h1>Edit News</h1>
                <form className="edit-form">
                    <label htmlFor="title">Title</label>
                    <input type="text" />
                    <label htmlFor="full_article">Full Article</label>
                    <input type="text" />
                    <span>Word limit 100</span>
                    <label htmlFor="short_article">Short Version of the Article</label>
                    <input type="text" />
                    <span>Word limit 25</span>
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