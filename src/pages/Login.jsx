import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("reiuser", username);
      navigate("/admin/dashboard");
    } else if (username === "user" && password === "12345678") {
      localStorage.setItem("username", username);
      navigate("/");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfdfd] p-8">
      {/* Logo and Header */}
      <div className="flex items-center gap-2 mb-6">
        <Link to="/">
          <img src="/Magnus.png" alt="MagnusTek" className="w-32" />
        </Link>
        <span className="text-2xl text-orange-500 font-medium">Login</span>
      </div>

      {/* Login Box */}
      <div className="border border-orange-500 rounded-2xl p-10 bg-white shadow-md">
        <div className="flex rounded-xl overflow-hidden">
          {/* Left Side */}
          <div className="bg-[#F46F22] p-10 text-white w-[500px]">
            <h2 className="text-2xl font-semibold text-center mb-3">
              Masuk ke Akun Anda
            </h2>
            <p className="text-center text-sm mb-8">
              Masukan Data Diri Anda Untuk Masuk ke Akun Anda.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-sm">Username</label>
                <input
                  className="w-full px-4 py-2.5 mt-1 rounded-xl border-2 border-[#4E2C83] bg-white text-black"
                  placeholder="Masukan Username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 mt-1 rounded-xl border-2 border-[#4E2C83] bg-white text-black"
                  placeholder="Masukan Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-[#4e2e8f] text-white py-3 rounded-xl mt-6 hover:bg-[#3e2470] transition-colors"
            >
              Login
            </button>

            <Link
              to="/register"
              className="text-sm text-center mt-4 block text-white hover:underline"
            >
              Belum Memiliki Akun? Registrasi
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-[500px] flex flex-col items-center justify-center p-12 bg-white">
            <img src="/Magnus.png" alt="MagnusTek" className="w-48 mb-6" />
            <h2 className="text-2xl font-semibold text-[#4e2e8f] mb-3">
              Get Started With US
            </h2>
            <p className="text-sm text-[#4e2e8f] mb-8 text-center">
              langkah mudah untuk pengalaman berbelanja yang lebih baik di
              Magnustek
            </p>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white border rounded-xl shadow-lg p-6 w-[500px] text-center">
            <div className="text-red-600 text-3xl mb-2">❗</div>
            <h2 className="text-red-600 font-bold text-lg mb-2">
              Harap Masukan Username dan Password Dengan Benar!
            </h2>
            <button
              className="bg-[#4e2e8f] text-white py-2 px-4 rounded-full text-sm"
              onClick={() => setShowError(false)}
            >
              Lengkapi Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
