import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../utils/services";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Basic client-side validation
    if (!credentials.username.trim() || !credentials.password.trim()) {
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }

    try {
      const response = await loginAdmin(credentials);
      
      if (response.data.success) {
        // Pass user data to parent component (no token handling needed - cookies are automatic)
        onLogin(response.data.user);
        navigate("/admin");
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      // Error handling for different types of failures
      if (error.message.includes('Too many')) {
        setError("Too many login attempts. Please try again later.");
      } else if (error.message.includes('credentials')) {
        setError("Invalid username or password.");
      } else if (error.message.includes('Network')) {
        setError("Network error. Please check your connection.");
      } else {
        setError(error.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-black">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-8 w-96">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-white mb-2">Admin Login</h1>
          <p className="text-gray-400 text-sm">Access the admin panel</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={credentials.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              disabled={loading}
              required
              autoComplete="username"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={credentials.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              disabled={loading}
              required
              autoComplete="current-password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg px-4 py-3 transition duration-200 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs">
            Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
