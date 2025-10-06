import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyAccount = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter OTP!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/hr/verifyHrOtp",
        { otp },
        { withCredentials: true }
      );

      console.log("Verification success:", res.data);
      navigate("/login"); // ✅ redirect after verification
    } catch (error) {
      console.error("Verification failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid OTP!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
        {/* Loader Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-2xl">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          HR Management System
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Verify Your Account
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please enter the OTP sent to your registered email.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* OTP Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter OTP
            </label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="123456"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest text-lg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Verifying..." : "Verify Account"}
          </button>
        </form>

        {/* Resend OTP */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Didn’t get OTP?{" "}
          <button
            type="button"
            onClick={() => alert("Resend OTP feature here")}
            className="text-blue-600 hover:underline cursor-pointer "
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyAccount;
