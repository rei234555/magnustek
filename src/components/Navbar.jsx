import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaShoppingBasket,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [showNotFound, setShowNotFound] = useState(false);

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

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#F46F22]"
      : "text-gray-900 hover:text-[#F46F22]";

  const isDropdownActive = (basePath) =>
    location.pathname.startsWith(basePath)
      ? "text-[#F46F22]"
      : "text-gray-900 group-hover:text-[#F46F22]";

  // Untuk close menu saat pindah halaman
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <section className="w-full flex justify-between items-center px-6 py-4 h-[72px] border-b border-[#F46F22] shadow-sm relative z-50 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/Magnus.png" alt="MagnusTek Logo" className="w-36" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden flex items-center text-2xl text-[#F46F22] z-50"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Navigasi Desktop */}
      <ul className="hidden lg:flex space-x-6 text-sm font-medium relative">
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
                    <Link to="/sub/indoor" className="hover:text-[#F46F22]">
                      LED Indoor
                    </Link>
                  </li>
                  <li>
                    <Link to="/sub/outdoor" className="hover:text-[#F46F22]">
                      LED Outdoor
                    </Link>
                  </li>
                  <li>
                    <Link to="/sub/portable" className="hover:text-[#F46F22]">
                      Portable/Event Series
                    </Link>
                  </li>
                  <li>
                    <Link to="/sub/banner" className="hover:text-[#F46F22]">
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
                    <Link to="/sub/all-in-one" className="hover:text-[#F46F22]">
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
                    <Link to="/sub/conference" className="hover:text-[#F46F22]">
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
          <span className={`inline-block py-2 ${isDropdownActive("/tentang")}`}>
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

      {/* Ikon Desktop */}
      <div className="hidden lg:flex items-center space-x-6 text-sm">
        {!showSearch ? (
          // TAMPILAN SEBELUM DIKLIK: ikon + tulisan "Search"
          <div
            className="flex items-center space-x-2 cursor-pointer text-black"
            onClick={() => setShowSearch(true)}
          >
            <FaSearch />
            <span>Search</span>
          </div>
        ) : (
          // TAMPILAN SETELAH DIKLIK: input search
          <div className="relative flex items-center">
            <input
              type="text"
              autoFocus
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              className="px-3 py-1 rounded-lg border border-[#F46F22] focus:outline-none text-black transition-all duration-200 w-32 focus:w-48"
              style={{ transition: "width 0.3s" }}
              onBlur={() => setShowSearch(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setShowNotFound(true);
                  setShowSearch(false);
                }
              }}
            />
          </div>
        )}

        {showNotFound && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div
              className="bg-white border-4 border-[#F6A700] rounded-2xl shadow-xl px-8 py-7 w-[730px] text-left relative"
              style={{
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
              }}
            >
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-[#FFF7E0] border-2 border-[#F6A700]">
                  <img src="/warning.png" alt="!" className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#F6A700] leading-tight mb-1">
                    Lengkapi Data Terlebih Dahulu
                  </p>
                  <p className="text-black text-base">
                    Isi semua data dengan benar.
                  </p>
                </div>
              </div>
              <button
                className="block mx-auto bg-[#F46F22] text-white px-8 py-2.5 rounded-lg mt-7 font-semibold text-base hover:bg-orange-500 transition"
                onClick={() => setShowNotFound(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        )}

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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F46F22]">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/Magnus.png" alt="MagnusTek Logo" className="w-28" />
          </Link>
          <button
            className="text-2xl text-[#F46F22]"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col space-y-2 px-6 py-4 text-base font-medium">
          <li>
            <Link
              to="/"
              className={isActive("/")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/produk/all"
              className={isActive("/produk")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Produk
            </Link>
          </li>
          <li>
            <Link
              to="/mitra"
              className={isActive("/mitra")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Mitra
            </Link>
          </li>
          <li>
            <Link
              to="/portofolio"
              className={isActive("/portofolio")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              to="/tentang/profil-perusahaan"
              className={isActive("/tentang")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
          </li>
        </ul>
        <div className="flex flex-col space-y-2 px-6 pb-6 mt-auto">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-[#F46F22]">
            <FaSearch />
            <span>Search</span>
          </div>
          <Link
            to="/keranjang"
            className="flex items-center space-x-2 cursor-pointer hover:text-[#F46F22]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaShoppingBasket />
            <span>Keranjang (0)</span>
          </Link>
          {username ? (
            <>
              <Link
                to="/profile"
                className="flex items-center space-x-2 cursor-pointer hover:text-[#F46F22]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUser />
                <span>{username}</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="flex items-center space-x-2 cursor-pointer hover:text-red-500 text-left"
              >
                <FaUser />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-2 cursor-pointer hover:text-[#F46F22]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaUser />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>

      {/* Modal Logout */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white border border-[#F46F22] rounded-xl shadow-lg p-6 w-[400px] text-center">
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
    </section>
  );
};

export default Navbar;
