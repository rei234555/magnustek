import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = () => {
    alert("Registrasi berhasil (dummy)");
  };

  const handleGoogleRegister = () => {
    alert("Register dengan Google belum dikonfigurasi.");
  };

  const handleFacebookRegister = () => {
    alert("Register dengan Facebook belum dikonfigurasi.");
  };

  return (
    <div className="min-h-screen max-w-full flex flex-col items-center justify-center bg-[#fdfdfd] relative p-8">
      {/* Logo and Register text at top */}
      <div className="flex items-center gap-2 mb-6">
        <Link to="/">
          <img src="/Magnus.png" alt="MagnusTek" className="w-32" />
        </Link>
        <span className="text-2xl text-orange-500 font-medium">Register</span>
      </div>

      {/* Main container with orange border */}
      <div className="border border-orange-500 rounded-2xl p-10 bg-white">
        <div className="flex rounded-xl overflow-hidden shadow-md">
          {/* Left side - Purple on White */}
          <div className="w-[500px] flex flex-col items-center justify-center p-12 bg-white">
            <img src="/Magnus.png" alt="MagnusTek" className="w-48 mb-6" />
            <h2 className="text-2xl font-semibold text-[#4e2e8f] mb-3">
              Get Started With US
            </h2>
            <p className="text-sm text-[#4e2e8f] mb-8 text-center">
              Ikuti langkah mudah untuk pengalaman berbelanja yang lebih baik di
              Magnustek
            </p>
          </div>

          {/* Right side - Orange background */}
          <div className="bg-[#F46F22] p-10 text-white w-[500px]">
            <h2 className="text-2xl font-semibold text-center mb-3">
              Registrasi Akun Anda
            </h2>
            <p className="text-center text-sm mb-8">
              Masukan Data Diri Anda Untuk Membuat Akun Anda.
            </p>

            <div className="flex justify-center gap-12 mb-6">
              <button
                onClick={handleGoogleRegister}
                className="bg-white w-[190px] text-black flex items-center justify-center px-4 py-2.5 rounded-full shadow hover:bg-gray-50"
              >
                <img
                  src="https://img.icons8.com/color/20/google-logo.png"
                  className="mr-2"
                  alt="Google"
                />
                Google
              </button>
              <button
                onClick={handleFacebookRegister}
                className="bg-white w-[190px] text-black flex items-center justify-center px-4 py-2.5 rounded-full shadow hover:bg-gray-50"
              >
                <img
                  src="https://img.icons8.com/fluency/20/facebook-new.png"
                  className="mr-2"
                  alt="Facebook"
                />
                Facebook
              </button>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex-1 h-px bg-white"></div>
              <span className="px-4 text-sm">Or</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm">Nama Depan</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Masukan Nama Depan..."
                  className="w-full px-4 py-2.5 mt-1 rounded-xl border-2 border-[#4E2C83] bg-white text-black"
                />
              </div>
              <div>
                <label className="text-sm">Nama Belakang</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Masukan Nama Belakang..."
                  className="w-full px-4 py-2.5 mt-1 rounded-xl border-2 border-[#4E2C83] bg-white text-black"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm">Username</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Masukan Username..."
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#4E2C83] bg-white text-black"
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukan Email..."
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#4E2C83] bg-white text-black"
                />
              </div>
              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Masukan Password..."
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#4E2C83] bg-white text-black"
                />
              </div>
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-[#4e2e8f] text-white py-3 rounded-xl mt-6 hover:bg-[#3e2470] transition-colors"
            >
              Registrasi
            </button>

            <Link
              to="/login"
              className="text-sm text-center mt-4 block text-white hover:underline"
            >
              Sudah Memiliki Akun? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
