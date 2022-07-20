import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1 className="intro">Being in touch with everything that happens around the world might be pretty hard. Well not annymore.</h1>
            <h2 className="second-intro">Welcome to Shade News </h2>

            <div className="home-main">
                <div>
                    <p>Check out our latest news!</p>
                    <Link to="/catalog"><button>Latest News</button></Link>
                </div>

                <div>
                    <p>You don't have an account?</p>
                    <Link to="/register"><button>Sign Up</button></Link>
                </div>

                <div>
                    <p>You have an account? </p>
                    <Link to="/login"><button>Sign In</button></Link>
                </div>
            </div>
        </div>
    );
}