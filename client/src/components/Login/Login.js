import "./Login.css";

import * as authService from "../../services/authService";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

export const Login = () => {
    const { login } = useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let email = form.get('email');
        let password = form.get('password');

        authService.login(email, password)
            .then(res => {
                login(res);
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
            <p className="sign-up-paragraph">You don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
    );
}