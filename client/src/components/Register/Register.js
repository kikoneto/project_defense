import "./Register.css"

import * as authService from "../../services/authService"
import { registerIsValid } from "../../validation";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

export const Register = () => {

    const { login } = useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let email = form.get('email');
        let username = form.get('username');
        let password = form.get('password');
        let confPass = form.get('confirm-password');
        let gender = form.get('gender');
        let avatarUrl = form.get('avatarUrl');

        if (registerIsValid(username, email, password, confPass)) {

            authService.register(email, username, password, gender, avatarUrl)
                .then(res => {
                    login(res);
                });
        }
    };

    return (
        <div className="register">
            <div className="register-box">
                <h1>Sign Up</h1>

                <form className="form-register" onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm-password" />
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="avatar"> Avatar URL</label>
                    <input type="text" placeholder="Optional... Default one is created automatically" />
                    <input type="submit" />
                </form>

            </div>

            <p className="sign-in-paragraph">Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
    );
}