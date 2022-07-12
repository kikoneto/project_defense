import "./Login.css";

export const Login = () => {
    return (
        <div className="login">
            <div className="login-box">
                <h1>Login</h1>

                <form className="form-login">
                    <label for="email">Email</label>
                    <input type="text" />
                    <label for="password">Password</label>
                    <input type="password" />
                    <input type="submit" />
                </form>
            </div>
            <p className="sign-up-paragraph">You don't have an account? <a href="/register">Sign Up</a></p>
        </div>
    );
}