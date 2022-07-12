import "./Create.css"

export const Create = () => {
    return (
        <div className="create">
            <div className="create-form-box">
                <h1>Create News</h1>
                <form className="create-form">
                    <label for="title">Title</label>
                    <input type="text" />
                    <label for="full_article">Full Article</label>
                    <input type="text" placeholder="At least 100 words" />
                    <label for="short_article">Short Version of the Article</label>
                    <input type="text" placeholder="At least 25 words" />
                    <label for="image_url">Image URL</label>
                    <input type="text" placeholder="exmp: https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRETW7ZQwdE8/v1/800x-1.jpg" />
                    <label for="topic">Topic</label>
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