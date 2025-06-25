import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    let valid = true;
    setUsernameError("");
    setPasswordError("");

    if (username === "admin" && password === "admin") {
      localStorage.setItem("admin", username);
      navigate("/admin/dashboard");
      return;
    } else if (username === "user" && password === "12345678") {
      localStorage.setItem("username", username);
      navigate("/");
      return;
    } else {
      if (username !== "admin" && username !== "user") {
        setUsernameError("Username Anda salah, coba lagi.");
        valid = false;
      }
      if (
        (username === "admin" && password !== "admin") ||
        (username === "user" && password !== "12345678")
      ) {
        setPasswordError("Password Anda salah, coba lagi.");
        valid = false;
      }
      if (!valid) {
        setShowError(true);
      }
    }
  };

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showError]);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-10"
      style={{ backgroundImage: "url('/bg-magnus.png')" }}
    >
      {/* Logo and Header */}
      <div className="flex items-center top-[20px] gap-2 mb-6">
        <Link to="/">
          <img src="/Magnus.png" alt="MagnusTek" className="w-32" />
        </Link>
        <span className="text-2xl text-orange-500 font-medium">Login</span>
      </div>

      {/* Login Box */}
      <div className="rounded-2xl p-10 h-[620px] bg-white/10 backdrop-blur-xs border border-[#F46F22] shadow-xl">
        <div className="flex rounded-xl overflow-hidden items-center justify-center">
          {/* Left Side */}
          <div className="bg-[#F46F22] items-center justify-center p-10 text-white h-[550px] w-[500px]">
            <div className="w-full" style={{ marginTop: "40px" }}>
              <h2 className="text-2xl font-semibold text-center mb-3">
                Masuk ke Akun Anda
              </h2>
              <p className="text-center text-sm mb-8">
                Masukan Data Diri Anda Untuk Masuk ke Akun Anda.
              </p>

              <form action="">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm">Username</label>
                    <input
                      className={`w-full px-4 py-2.5 mt-1 rounded-xl border-2 ${
                        usernameError ? "border-red-500" : "border-[#4E2C83]"
                      } bg-white text-black`}
                      placeholder="Masukan Username..."
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && (
                      <p className="text-sm text-red-600 mt-1">
                        {usernameError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm">Password</label>
                    <input
                      type="password"
                      className={`w-full px-4 py-2.5 mt-1 rounded-xl border-2 ${
                        passwordError ? "border-red-500" : "border-[#4E2C83]"
                      } bg-white text-black`}
                      placeholder="Masukan Password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && (
                      <p className="text-sm text-red-600 mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full bg-[#4e2e8f] text-white py-3 rounded-xl mt-6 hover:bg-[#3e2470] transition-colors"
                >
                  Login
                </button>
              </form>

              <Link
                to="/register"
                className="text-sm text-center mt-4 block text-white hover:underline"
              >
                Belum Memiliki Akun? Registrasi
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-[500px] flex flex-col items-center justify-center p-12">
            <img src="/Magnus.png" alt="MagnusTek" className="w-48 mb-6" />
            <h2 className="text-2xl font-semibold text-white mb-3">
              Get Started With US
            </h2>
            <p className="text-sm text-white mb-8 text-center">
              langkah mudah untuk pengalaman berbelanja yang lebih baik di
              Magnustek
            </p>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {showError && (
        <div className="absolute top-5 z-50 bg-white rounded-xl px-6 py-4 flex items-center gap-3 border-2 border-red-400 shadow">
          <img src="/error.png" alt="!" className="w-10 h-10" />
          <div>
            <p className="text-red-500 font-semibold text-md">
              Username dan Password Tidak Sesuai!
            </p>
            <p className="text-black text-sm">
              Masukan Username dan Password dengan benar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
