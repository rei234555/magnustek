import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setShowLogoutConfirm(false);
    navigate("/");
  };

  // Fungsi bantu untuk menentukan apakah path sedang aktif
  const isActive = (path) =>
    location.pathname === path
      ? "text-[#F46F22]"
      : "text-gray-900 hover:text-[#F46F22]";

  // Untuk menu dropdown yang mewakili beberapa sub-path
  const isDropdownActive = (basePath) =>
    location.pathname.startsWith(basePath)
      ? "text-[#F46F22]"
      : "text-gray-900 group-hover:text-[#F46F22]";

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 h-[72px] border-b border-[#F46F22] shadow-sm relative z-50 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/Magnus.png" alt="MagnusTek Logo" className="w-36" />
        </Link>
      </div>

      {/* Menu Navigasi */}
      <ul className="flex space-x-6 text-sm font-medium relative">
        <li className="flex items-center">
          <Link to="/" className={isActive("/")}>
            Beranda
          </Link>
        </li>

        <li className="group relative cursor-pointer flex items-center">
          <span
            className={`inline-block py-2 ${
              location.pathname.startsWith("/produk")
                ? "text-[#F46F22]"
                : "hover:text-[#F46F22] text-gray-900"
            }`}
          >
            Produk
          </span>

          {/* DROPDOWN CONTAINER */}
          <div className="fixed left-0 top-[72px] w-full bg-white shadow-lg z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-5 gap-6">
              <div>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      to="/produk/all"
                      className="text-[#F46F22] hover:text-orange-300 font-bold mb-2"
                    >
                      Semua Produk
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      to="/produk/LED"
                      className="text-black hover:text-[#F46F22] font-bold mb-10"
                    >
                      LED Display Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sub/indoor"
                      className="hover:text-[#F46F22]"
                    >
                      LED Indoor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sub/outdoor"
                      className="hover:text-[#F46F22]"
                    >
                      LED Outdoor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sub/portable"
                      className="hover:text-[#F46F22]"
                    >
                      Portable/Event Series
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sub/banner"
                      className="hover:text-[#F46F22]"
                    >
                      LED Banner
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      to="/produk/commercial"
                      className="text-black hover:text-[#F46F22] font-bold mb-10"
                    >
                      Commercial Display
                    </Link>
                  </li>
                  <li>
                    <Link to="/sub/tv-display" className="hover:text-[#F46F22]">
                      TV Wall / Commercial Display
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sub/all-in-one"
                      className="hover:text-[#F46F22]"
                    >
                      All in One Screen
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      to="/produk/collaboration"
                      className="text-black hover:text-[#F46F22] font-bold mb-10"
                    >
                      Collaboration System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sub/conference"
                      className="hover:text-[#F46F22]"
                    >
                      Conference System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sub/interactive"
                      className="hover:text-[#F46F22]"
                    >
                      Interactive Smartboard
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      to="/produk/smart"
                      className="text-black hover:text-[#F46F22] font-bold mb-10"
                    >
                      Smart Digital
                    </Link>
                  </li>
                  <li>
                    <Link to="/sub/kiosk" className="hover:text-[#F46F22]">
                      Standing Kiosk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className="flex items-center">
          <Link to="/mitra" className={isActive("/mitra")}>
            Mitra
          </Link>
        </li>

        <li className="flex items-center">
          <Link to="/portofolio" className={isActive("/portofolio")}>
            Portofolio
          </Link>
        </li>

        {/* Dropdown Tentang Kami */}
        <li className="group relative cursor-pointer flex items-center">
          <span
            className={`inline-block py-2 ${isDropdownActive("/tentang")}`}
          >
            Tentang Kami
          </span>
          {/* DROPDOWN CONTAINER */}
          <div className="fixed left-0 top-[72px] w-full bg-white shadow-lg z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to="/tentang/profil-perusahaan"
                      className="font-semibold hover:text-[#F46F22]"
                    >
                      Profil Perusahaan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tentang/sertifikat"
                      className="font-semibold hover:text-[#F46F22]"
                    >
                      Sertifikat Produk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tentang/bantuan"
                      className="font-semibold hover:text-[#F46F22]"
                    >
                      Pusat Bantuan 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>

      {/* Ikon */}
      <div className="flex items-center space-x-6 text-sm">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-[#F46F22]">
          <FaSearch />
          <span>Search</span>
        </div>
        <Link
          to="/keranjang"
          className="flex items-center space-x-1 cursor-pointer hover:text-[#F46F22]"
        >
          <FaShoppingBasket />
          <span>Keranjang (0)</span>
        </Link>

        {username ? (
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer text-black">
              <FaUser />
              <span>{username}</span>
            </div>
            {/* Dropdown */}
            <div className="fixed right-6 top-[72px] z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white border border-[#F46F22] rounded-md hover:text-white] shadow-lg w-56 py-4 px-4 text-right space-y-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm hover:bg-[#F46F22] hover:text-white text-left"
                >
                  Detail Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm hover:bg-red-500 hover:text-white text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center space-x-1 cursor-pointer hover:text-[#F46F22]"
          >
            <FaUser />
            <span>Login</span>
          </Link>
        )}
      </div>

      {/* Modal Logout */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white border border-[  #F46F22] rounded-xl shadow-lg p-6 w-[400px] text-center">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Anda yakin untuk logout dari akun?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Batal
              </button>
              <button
                className="bg-[#F46F22] text-white px-4 py-2 rounded-md"
                onClick={confirmLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
