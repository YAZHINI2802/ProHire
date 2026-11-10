import {useState} from 'react';
import "../css/Login.css";
import { FaEnvelope, FaLock,  FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleLogin = async()=>{
       
        setError("");
        if(email === "" || password === ""){
            setError("Please fill in all fields");
            return;
        }
        //email validation regex pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address");
            return;
        }


        //password validation regex pattern
        const passwordPattern =
           /^.{8,}$/;

        if (!passwordPattern.test(password)) {
            setError(
                "Password must contain uppercase, lowercase, number, special character and minimum 8 characters"
            );
            return;
        }
        // Backend API call
    try {
    console.log("Login API Calling...");

    const response = await loginUser({
        email: email,
        password: password
    });

    console.log("Backend Response:", response);
    console.log("Response Data:", response.data);


    alert("Login successful!");
    navigate("/backend-coordinator");

} catch (error) {
    console.log("Login Error:", error);
    console.log("Error Response:", error.response);

    setError(
        error.response?.data?.message ||
        "Invalid email or password"
    );
}
    };
    return(
        <div className="login-container">
            <div className="login-card">
                <h1>Welcome to ProHire</h1>
                <p>Login to your ProHire account</p>
                <div className="input-group">
                    <div className="input-field">
                            <FaEnvelope />
                            <input type="email" placeholder="Enter your email" 
                                   value={email}
                                   onChange={(e)=> setEmail(e.target.value)}/>
                     </div>


                    <div className="input-field">
                        <FaLock />
                        <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter the password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}/>
                        <button type="button" className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)} >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>


                     <div className="login-options">

                        <div className="remember-me">
                            <input type="checkbox" checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)} />
                            <span>Remember me</span>
                        </div>

                       <Link to="/forgot-password">Forgot password?</Link>

                    </div>
                     {error && <p className="error-message">{error}</p>}
                    <button type="submit" onClick={handleLogin}>
                        Login
                        
                        </button>
                </div>
            </div>


        </div>
    );


}
export default Login;