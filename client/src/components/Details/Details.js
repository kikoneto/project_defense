import "./Details.css";

export const Details = () => {
    return (
        <div className="details-box">
            <div className="details-card">
                <div className="details-card__body">
                    <span className="tag tag-blue">Entertainment</span>
                    <h4>Netflix to Stream Johnny Depp’s Return to Film in France</h4>
                    <p>Netflix Inc. has acquired the rights to stream Johnny Depp’s next film in France, a deal that will
                        help fund the actor’s first feature...</p>
                </div>

                <div className="details-card__image">
                    <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRETW7ZQwdE8/v1/800x-1.jpg" alt="-details-card__image" className="details-card__image" width="600" />
                </div>

                <div className="full-article">
                    <article>Netflix Inc. has acquired the rights to stream Johnny Depp’s next film in France, a deal that
                        will help fund the actor’s first feature role following his defamation trial against ex-wife Amber
                        Heard, and what he claimed was a wider boycott by Hollywood studios. The entertainment giant has
                        licensed the rights to stream the film in the country 15 months after its release in theaters,
                        according to people familiar with the matter who asked not to be identified because the terms
                        haven’t been announced publicly. The company does not have the rights for the film outside of
                        France.</article>
                </div>
                <div className="details-card__footer">
                    <div className="details-user">
                        <img src="https://i.pravatar.cc/40?img=1" alt="details-user__image" className="details-user__image" />
                        <div className="details-user__info">
                            <h5>janelinn@gmail.com</h5>
                        </div>
                    </div>

                    <div className="details-action-buttons">
                        <button className="tag tag-pink">Edit</button>
                        <button className="tag tag-red">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}