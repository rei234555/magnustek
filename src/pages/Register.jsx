import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // clear error on change
  };

  const handleRegister = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Nama depan perlu diisi!";
    if (!formData.lastName) newErrors.lastName = "Nama belakang perlu diisi!";
    if (!formData.username) newErrors.username = "Username perlu diisi!";
    if (!formData.email) newErrors.email = "Email perlu diisi!";
    if (!formData.password) newErrors.password = "Password perlu diisi!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowModal("error");
      setTimeout(() => setShowModal(null), 2000);
    } else {
      setErrors({});
      setShowModal("success");
      setTimeout(() => {
        setShowModal(null);
        navigate("/login");
      }, 2000);
    }
  };

  const handleGoogleRegister = () => {
    alert("Register dengan Google belum dikonfigurasi.");
  };

  const handleFacebookRegister = () => {
    alert("Register dengan Facebook belum dikonfigurasi.");
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6 relative"
      style={{ backgroundImage: "url('/bg-magnus.png')" }}
    >
      {/* Modal */}
      {showModal === "error" && (
        <div className="absolute top-5 z-50 bg-white rounded-xl px-6 py-4 flex items-center gap-3 border-2 border-yellow-400 shadow">
          <img src="/warning.png" alt="!" className="w-10 h-10" />
          <div>
            <p className="text-yellow-500 font-semibold text-md">
              Lengkapi Data Terlebih Dahulu
            </p>
            <p className="text-black text-sm">Isi semua data dengan benar.</p>
          </div>
        </div>
      )}
      {showModal === "success" && (
        <div className="absolute top-5 z-50 bg-white rounded-xl px-6 py-4 flex items-center gap-3 border-2 border-green-500 shadow">
          <img src="/succes.png" alt="✓" className="w-10 h-10" />
          <div>
            <p className="text-green-600 font-semibold text-md">
              Registrasi Berhasil!
            </p>
            <p className="text-black text-sm">
              Selamat, akun Anda telah berhasil dibuat.
              <br /> Login dan mulai eksplorasi sekarang!
            </p>
          </div>
        </div>
      )}

      {/* Logo and Header */}
      <div className="flex items-center top-[20px] gap-2 mb-6">
        <Link to="/">
          <img src="/Magnus.png" alt="MagnusTek" className="w-28" />
        </Link>
        <span className="text-xl text-orange-500 font-medium">Register</span>
      </div>

      <div className="rounded-2xl px-6 py-6 w-full max-w-6xl bg-white/10 backdrop-blur-xs border border-[#F46F22]">
        <div className="flex rounded-xl overflow-hidden">
          {/* Kiri */}
          <div className="w-[600px] flex flex-col items-center justify-center p-1">
            <img src="/Magnus.png" alt="MagnusTek" className="w-36 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2 text-center">
              Get Started With Us
            </h2>
            <p className="text-md text-white text-center">
              Ikuti langkah mudah untuk pengalaman berbelanja yang lebih baik di
              Magnustek
            </p>
          </div>

          {/* Kanan */}
          <div className="bg-[#F46F22] p-6 text-white w-[700px]">
            <h2 className="text-xl font-semibold text-center mb-2">
              Registrasi Akun Anda
            </h2>
            <p className="text-center text-xs mb-6">
              Masukan Data Diri Anda Untuk Membuat Akun Anda.
            </p>

            <div className="flex justify-center gap-6 mb-4">
              <button
                onClick={handleGoogleRegister}
                className="bg-white w-[150px] text-black flex items-center justify-center px-3 py-2 rounded-full shadow hover:bg-gray-50"
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
                className="bg-white w-[150px] text-black flex items-center justify-center px-3 py-2 rounded-full shadow hover:bg-gray-50"
              >
                <img
                  src="https://img.icons8.com/fluency/20/facebook-new.png"
                  className="mr-2"
                  alt="Facebook"
                />
                Facebook
              </button>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex-1 h-px bg-white"></div>
              <span className="px-2 text-xs">Or</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-xs">Nama Depan</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Masukan Nama Depan..."
                  className="w-full px-3 py-2 mt-1 rounded-lg border-2 bg-white text-black text-sm border-[#4E2C83]"
                />
                {errors.firstName && (
                  <p className="text-sm text-yellow-300 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="text-xs">Nama Belakang</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Masukan Nama Belakang..."
                  className="w-full px-3 py-2 mt-1 rounded-lg border-2 bg-white text-black text-sm border-[#4E2C83]"
                />
                {errors.lastName && (
                  <p className="text-sm text-yellow-300 mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-sm">Username</label>
                <div className="relative">
                  <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 mt-1 rounded-xl border-2 ${
                      errors.username
                        ? "border-yellow-400"
                        : "border-purple-800"
                    } bg-white text-black pr-10`}
                    placeholder="Masukan Username..."
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <img
                      src="/ikon-username.png"
                      alt="ikon username"
                      className="h-5 w-5"
                    />
                  </span>
                </div>
                {errors.username && (
                  <p className="text-sm text-yellow-300 mt-1">
                    {errors.username}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm">Email</label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 mt-1 rounded-xl border-2 border-[#4E2C83] bg-white text-black pr-10"
                    placeholder="Masukan Email..."
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <img
                      src="/ikon-email.png"
                      alt="ikon email"
                      className="h-5 w-5"
                    />
                  </span>
                </div>
                {errors.email && (
                  <p className="text-sm text-yellow-300 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 mt-1 rounded-xl border-2 ${
                      errors.password ? "border-yellow-400" : "border-[#4E2C83]"
                    } bg-white text-black pr-10`}
                    placeholder="Masukan Password..."
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <img
                      src="/ikon-password.png"
                      alt="ikon password"
                      className="h-5 w-5"
                    />
                  </span>
                </div>
                {errors.password && (
                  <p className="text-sm text-yellow-300 mt-1">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-[#4e2e8f] text-white py-2.5 rounded-lg mt-5 hover:bg-[#3e2470] transition-colors text-sm"
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
    </section>
  );
};

export default Register;
