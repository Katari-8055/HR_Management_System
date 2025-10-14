import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { search } = useLocation(); 
  const queryParams = new URLSearchParams(search);
  const token = queryParams.get("token");   

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/api/employee/passwordSetup", { password, token },{withCredentials:true})
      console.log("Response:", res.data);
      console.log("New Password:", password);
      navigate("/emp/detail")
    } catch (err) {
      setError("Failed to set password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Set Your Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Saving..." : "Set Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPassword;
