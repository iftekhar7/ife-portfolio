 
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h4 className="text-h4">Welcome Back</h4>
          <p className="text-sub-heading mb-12">Please login to your account</p>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" id="username" value={'Admin'} placeholder="Enter your username" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={'Admin@123'}
            placeholder="Enter your password"
          />
        </div>

        <button className="login-btn" onClick={() => navigate("/")}>
          Login
        </button>
        <p className="forgot-password text-body mt-6">
          <a href="#" className="text-body">Forgot Password?</a>
        </p>
        <p className="text-body text-center text-secondary mt-1">
          Don't have an account?{" "}
          <span
            className="text-primary cursor-pointer text-hover-underlined"
            onClick={() => navigate("/registration")}
          >
            Sign up now
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
export default Login;
