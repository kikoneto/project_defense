import "./Home.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const Home = () => {

    const { user } = useContext(AuthContext);

    const guestInterface = (
        <div className="home-container">
            <div>
                <p>You don't have an account?</p>
                <Link to="/register" replace><button>Sign Up</button></Link>
            </div>

            <div>
                <p>You have an account? </p>
                <Link to="/login" replace><button>Sign In</button></Link>
            </div>
        </div>
    );

    const userInterface = (
        <div className="home-container">
            <div>
                <p>Check out our latest news!</p>
                <Link to="/catalog" replace><button>Latest News</button></Link>
            </div>

            <div>
                <p>Upload news!</p>
                <Link to="/create" replace><button>Upload News</button></Link>
            </div>
        </div>
    )

    return (
        <div>
            <h1 className="intro">Being in touch with everything that happens around the world might be pretty hard. Well not annymore.</h1>
            <h2 className="second-intro">Welcome to Shade News </h2>

            {user._id
                ? userInterface
                : guestInterface
            }


            <div className="rights">
                <h4>© 2022 All Rights Reserved By</h4>
                <a href="https://github.com/kikoneto"> Kristiyan Paunov</a>
            </div>
        </div>
    );
}