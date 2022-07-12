import "./Register.css"

export const Register = () => {
    return (
        <div className="register">
            <div className="register-box">
                <h1>Sign Up</h1>

                <form className="form-register">
                    <label for="username">Username</label>
                    <input type="text" />
                    <label for="email">Email</label>
                    <input type="email" />
                    <label for="password">Password</label>
                    <input type="password" />
                    <label for="password">Confirm Password</label>
                    <input type="password" />
                    <label for="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label for="avatar"> Avatar URL</label>
                    <input type="text" placeholder="Optional... Default one is created automatically" />
                    <input type="submit" />
                </form>

            </div>

            <p className="sign-in-paragraph">Already have an account? <a href="/login">Sign In</a></p>
        </div>
    );
}