// import { useState } from "react";
// import {
//   Users,
//   Mail,
//   LockKeyhole,
//   Eye,
//   EyeOff,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// import "../css/Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleLogin = (event) => {
//     event.preventDefault();

//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Remember me:", rememberMe);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">

//         {/* Pro Hire Logo */}
//         <div className="login-header">
//           <Users className="logo-icon" />

//           <h1>
//             Pro <span>Hire</span>
//           </h1>

//           <p className="brand-subtitle">
//             Recruiter Management System
//           </p>
//         </div>

//         {/* Login Title */}
//         <div className="login-title">
//           <h2>Sign In</h2>

          
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleLogin}>

//           {/* Email Input */}
//           <div className="input-group">
//             <Mail className="input-icon" />

//             <input
//               type="email"
//               placeholder="Email address"
//               value={email}
//               onChange={(event) =>
//                 setEmail(event.target.value)
//               }
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="input-group">
//             <LockKeyhole className="input-icon" />

//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(event) =>
//                 setPassword(event.target.value)
//               }
//               required
//             />

//             <button
//               type="button"
//               className="password-toggle"
//               onClick={() =>
//                 setShowPassword(!showPassword)
//               }
//               aria-label={
//                 showPassword
//                   ? "Hide password"
//                   : "Show password"
//               }
//             >
//               {showPassword ? <EyeOff /> : <Eye />}
//             </button>
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="login-options">

//             <label className="remember-me">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(event) =>
//                   setRememberMe(event.target.checked)
//                 }
//               />

//               <span>Remember me</span>
//             </label>

//             <a href="/forgot-password">
//               Forgot Password?
//             </a>

//           </div>

//           {/* Login Button */}
//           <button type="submit" className="login-button">
//             Login
//           </button>

          
//             <div className="login-footer">
//               <span>Don't have an account?</span>
//               <Link to="/signup">Sign Up</Link>
//             </div>

//         </form>

//       </div>
//     </div>
//   );
// }

// export default Login;