import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900">
      <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-2xl shadow-lg w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all">Login</button>
        <div className="mt-4 text-xs text-white/60 text-center">
          Demo: <b>parisuddha@yopmail.com</b> / <b>Parisuddha@123</b>
        </div>
      </form>
    </div>
  );
};

export default Login; 