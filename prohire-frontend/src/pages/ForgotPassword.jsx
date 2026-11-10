import { useState } from "react";
import "../css/ForgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleSubmit = () => {
        setError("");
        if (email === "") {
            setError("Please enter your email");
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        setSuccess("Email submitted successfully");

        
    };

    return (
        <div className="forgot-container">
            <div className="forgot-card">
                <h2>Forgot Password?</h2>

                <p>Enter your email to reset your password.</p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {error && <p className="error-message">{error}</p>}
                {success && (<p className="success-message">{success}</p>
)}

                <button  type ="button" onClick={handleSubmit}>
                    Reset Password
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;