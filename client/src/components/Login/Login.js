import "./Login.css";
import * as authService from "../services/authService";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let email = form.get('email');
        let password = form.get('password');

        authService.login(email, password)
            .then(res => {
                login(res);

                navigate('/catalog', { replace: true });

            })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <div className="login">
            <div className="login-box">
                <h1>Login</h1>

                <form className="form-login" onSubmit={onSubmitHandler}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="exmp. peter@yahoo.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                    <input type="submit" />
                </form>
            </div>
            <p className="sign-up-paragraph">You don't have an account? <a href="/register">Sign Up</a></p>
        </div>
    );
}