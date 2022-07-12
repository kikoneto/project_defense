import "./Catalog.css";

export const Catalog = () => {
    return (
        <div className="container">

            <div className="card">
                <div className="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image " width="600" />
                </div>
                <div className="card__body">
                    <span className="tag tag-blue">Technology</span>
                    <h4>What's new in 2022 Tech</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo
                        doloribus.
                        Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                        <div className="user__info">
                            <h5>Jane Doe</h5>
                            <small>2h ago</small>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="tag tag-brown">Details</button>
                        <button className="tag tag-pink">Edit</button>
                        <button className="tag tag-red">Delete</button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image /" width="600" />
                </div>
                <div className="card__body">
                    <span className="tag tag-blue">Technology</span>
                    <h4>What's new in 2022 Tech</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo
                        doloribus.
                        Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                        <div className="user__info">
                            <h5>Jane Doe</h5>
                            <small>2h ago</small>
                        </div>
                    </div>

                    <div>
                        <button>Details</button>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card__header">
                    <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image /" width="600" />
                </div>
                <div className="card__body">
                    <span className="tag tag-blue">Technology</span>
                    <h4>What's new in 2022 Tech</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo
                        doloribus.
                        Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                        <div className="user__info">
                            <h5>Jane Doe</h5>
                            <small>2h ago</small>
                        </div>
                    </div>

                    <div>
                        <button>Details</button>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                </div>
            </div>
            <p>Todo: Pagination</p>
        </div>
    );
}