import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-box">
                <section className="footer-section">
                    <form>
                        <div className="footer-form">
                            <div className="footer-signup">
                                <p>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="footer-input">
                                <div className="">
                                    <input type="email" placeHolder="Email Address" className="" />
                                </div>
                            </div>

                            <div className="footer-submit">
                                <button type="submit" className="">
                                    Subscribe
                                </button>
                            </div>

                            <div className="rights">
                                <h4>© 2022 All Rights Reserved By</h4>
                                <a href="https://github.com/kikoneto"> Kristiyan Paunov</a>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </footer>
    );
}