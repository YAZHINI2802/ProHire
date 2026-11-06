
import { useState } from "react";
import {
  Users,
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

import { Link } from "react-router-dom";
import "../css/SignUp.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Sign Up Data:", formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-logo">
          <Users size={34} />
        </div>

        <h1 className="signup-brand">
          Pro <span>Hire</span>
        </h1>

        <p className="signup-subtitle">
          Recruiter Management System
        </p>

        <h2 className="signup-heading">Create Account</h2>

        <form onSubmit={handleSubmit}>

          <div className="signup-input-group">
            <User size={19} />

            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-input-group">
            <Mail size={19} />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-input-group">
            <LockKeyhole size={19} />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="signup-eye-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          <div className="signup-input-group">
            <LockKeyhole size={19} />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="signup-eye-button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>

        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login">Sign In</Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;
