import React, { useState, useEffect } from "react";
import { Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailKiosk = () => {
  const navigate = useNavigate();

  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (showLoginRequired) {
      const timer = setTimeout(() => {
        setShowLoginRequired(false);
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoginRequired, navigate]);

  const handleBuyProduct = () => {
    if (!username) {
      localStorage.setItem("redirectAfterLogin", "/detail/detail-kiosk");
      setShowLoginRequired(true);
      return;
    }
    navigate("/beli/beli-kiosk");
  };

  const [showReviewLoginModal, setShowReviewLoginModal] = useState(false);

  useEffect(() => {
    if (showReviewLoginModal) {
      const timer = setTimeout(() => {
        setShowReviewLoginModal(false);
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showReviewLoginModal]);

  const [showCartLoginModal, setShowCartLoginModal] = useState(false);

  useEffect(() => {
    if (showCartLoginModal) {
      const timer = setTimeout(() => {
        setShowCartLoginModal(false);
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showCartLoginModal]);

  const handleAddToCart = () => {
    if (!username) {
      setShowCartLoginModal(true);
      return;
    }
    navigate("/keranjang");
  };

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    nama: "",
    email: "",
    judul: "",
    deskripsi: "",
  });

  const [showWishlistLoginModal, setShowWishlistLoginModal] = useState(false);

  useEffect(() => {
    if (showWishlistLoginModal) {
      const timer = setTimeout(() => {
        setShowWishlistLoginModal(false);
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showWishlistLoginModal]);

  const ukuranOptions = {
    43: 28177128,
    49: 30500000,
    55: 33750000,
  };

  const [selectedUkuran, setSelectedUkuran] = useState("43");
  const [jumlah, setJumlah] = useState(1);
  const [activeTab, setActiveTab] = useState("spesifikasi");

  const handleUkuranClick = (ukuran) => setSelectedUkuran(ukuran);
  const increment = () => setJumlah(jumlah + 1);
  const decrement = () => jumlah > 1 && setJumlah(jumlah - 1);
  const hargaSatuan = ukuranOptions[selectedUkuran];
  const totalHarga = hargaSatuan * jumlah;

  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const reviews = [
    {
      nama: "Roy",
      tanggal: "2025-06-04",
      rating: 5,
      judul: "Produk Bagus",
      deskripsi:
        "Produk standing kiosk ini benar-benar memenuhi ekspektasi. Desainnya elegan dan modern, sangat cocok ditempatkan di area publik. ",
    },
    {
      nama: "Menos",
      tanggal: "2025-05-29",
      rating: 5,
      judul: "Desain Modern dan Responsif",
      deskripsi:
        "Produk standing kiosk ini benar-benar memenuhi ekspektasi. Desainnya elegan dan modern, sangat cocok ditempatkan di area publik, layar sentuhnya sangat responsif dan mudah digunakan. Pemasangan juga cepat dan rapi.",
    },
    {
      nama: "Budi",
      tanggal: "2025-05-24",
      rating: 4,
      judul: "Fitur Lengkap dan Tahan Lama",
      deskripsi:
        "Kios ini dilengkapi dengan berbagai fitur canggih seperti pemindai QR, NFC, dan printer thermal. Kualitas materialnya kokoh dan terlihat tahan digunakan antrian personal di tempat ramai. Sangat recommended untuk kebutuhan bisnis.",
    },
    {
      nama: "Andi",
      tanggal: "2025-05-20",
      rating: 4,
      judul: "Performa Baik tapi Perlu Perbaikan Minor",
      deskripsi:
        "Secara keseluruhan performanya bagus dan cukup stabil. Namun, bagian ventilasi di belakang terasa agak bising, terutama jika diletakkan dekat ruangan AC. Selain itu, tampilannya user-friendly dan cukup intuitif.",
    },
    {
      nama: "Rama",
      tanggal: "2025-05-14",
      rating: 3,
      judul: "Cukup Memadai tapi Tidak Istimewa",
      deskripsi:
        "Kios interaktif ini berfungsi sebagaimana mestinya. Tapi tidak ada yang terlalu menonjol dari segi desain, kecepatan pengolahan juga biasa. Cocok untuk penggunaan desktop biasa. Kurang memuaskan jika digunakan di lingkungan high traffic.",
    },
    {
      nama: "Ramos",
      tanggal: "2025-05-04",
      rating: 3,
      judul: "Kurang Stabil dan Agak Lambat",
      deskripsi:
        "Sistem kadang tidak responsif jika disentuh dengan kasar. Layar kadang tidak merespon dengan baik, terutama saat digunakan oleh banyak orang secara bersamaan. Support teknis juga agak lambat merespon komplain.",
    },
  ];

  const sortedReviews = [...reviews].sort((a, b) => {
    const dateA = new Date(a.tanggal);
    const dateB = new Date(b.tanggal);
    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);
  const paginatedReviews = sortedReviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-gray-800">
      {/* Modal Ulasan */}
      {showReviewModal && (
        <div className="fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl relative border-2 border-[#4E2C83]">
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-gray-400 hover:text-[#F46F22]"
              onClick={() => setShowReviewModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-start mb-6">
              Beri Ulasan Tentang Produk
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/produk/kiosk.png"
                alt="Produk"
                className="w-16 h-16 object-contain rounded-lg border"
              />
              <span className="font-semibold">
                DIGITAL SIGNAGE WINDOWS TOUCHSCREEN
              </span>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Beri Nilai Untuk Produk Ini
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReviewRating(i)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={32}
                      fill={reviewRating >= i ? "#F46F22" : "none"}
                      stroke="#F46F22"
                    />
                  </button>
                ))}
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">
                  Nama Panggilan
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Masukkan Nama Panggilan"
                  value={reviewForm.nama}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, nama: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Masukkan Email"
                  value={reviewForm.email}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Judul Ulasan</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Masukkan Judul Ulasan"
                  value={reviewForm.judul}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, judul: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Deskripsi Ulasan
                </label>
                <textarea
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  placeholder="Masukkan Deskripsi Ulasan"
                  value={reviewForm.deskripsi}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, deskripsi: e.target.value })
                  }
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *Penambahan ulasan perlu membuat akun terlebih dahulu.
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="flex-1 bg-[#4E2C83] text-white py-2 rounded font-semibold hover:bg-[#F46F22] transition"
                  onClick={() => setShowReviewModal(false)}
                >
                  Kirim Ulasan
                </button>
                <button
                  type="button"
                  className="flex-1 bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
                  onClick={() => setShowReviewModal(false)}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => navigate("/produk/smart")}
        className="mb-6 w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Produk Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gambar */}
        <div className="flex justify-center items-center bg-gray-100 p-4">
          <img
            src="/produk/kiosk.png"
            alt="Digital Signage"
            className="w-full max-w-sm"
          />
        </div>

        {/* Detail Produk */}
        <div>
          <h1 className="text-2xl font-semibold mb-8">
            DIGITAL SIGNAGE WINDOWS TOUCHSCREEN
          </h1>
          <div className="flex items-center justify-between border-b-2 py-6 border-[#4E2C83] mb-10">
            {/* Bintang dan teks */}
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} fill="currentColor" />
              ))}
              <span className="text-gray-600 text-lg ml-2">5 | 1 Ulasan</span>
            </div>

            {/* Tombol & Wishlist */}
            <div className="flex items-center space-x-4">
              <button
                className="bg-[#4E2C83] text-white text-sm px-4 py-1.5 rounded-lg hover:bg-white hover:text-[#4E2C83] border border-[#4E2C83] transition"
                onClick={() => {
                  if (!username) {
                    setShowReviewLoginModal(true);
                    return;
                  }
                  setShowReviewModal(true);
                }}
              >
                Beri Ulasan
              </button>

              {showReviewLoginModal && (
                <div className="fixed inset-0 flex items-start justify-center z-[9999]">
                  <div className="mt-16 bg-white border-2 border-[#4E2C83] rounded-xl shadow-xl px-8 py-5 max-w-5xl flex items-center gap-4">
                    <div className=" border-[#4E2C83]">
                      <img src="/warning1.png" alt="!" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#4E2C83] mb-1">
                        Harap Melakukan Login!
                      </p>
                      <p className="text-black text-sm">
                        Login diperlukan untuk menambahkan ulasan produk.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  if (!username) {
                    setShowWishlistLoginModal(true);
                    return;
                  }
                  navigate("/wishlist");
                }}
                className="text-gray-400 hover:text-[#4E2C83] transition"
                aria-label="Tambah ke Wishlist"
              >
                <Heart size={28} />
              </button>

              {showWishlistLoginModal && (
                <div className="fixed inset-0 flex items-start justify-center z-[9999]">
                  <div className="mt-16 bg-white border-2 border-[#F46F22] rounded-xl shadow-xl px-8 py-5 max-w-5xl flex items-center gap-4">
                    <div className=" border-[#F46F22]">
                      <img src="/warning.png" alt="!" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#F46F22] mb-1">
                        Harap Melakukan Login!
                      </p>
                      <p className="text-black text-sm">
                        Login diperlukan untuk menambahkan whistlist produk.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Ukuran */}
          <div className="mb-14 border-b-2 py-6 border-[#4E2C83]">
            <p className="text-lg text-gray-600 mb-4">Ukuran Tersedia</p>
            <div className="flex space-x-2">
              {Object.keys(ukuranOptions).map((ukuran) => (
                <button
                  key={ukuran}
                  onClick={() => handleUkuranClick(ukuran)}
                  className={`px-3 py-1 border rounded text-lg transition ${
                    selectedUkuran === ukuran
                      ? "bg-[#F46F22] text-white border-[#F46F22]"
                      : "border-gray-400 hover:border-orange-400 hover:text-[#F46F22]"
                  }`}
                >
                  {ukuran}"
                </button>
              ))}
            </div>
          </div>

          {/* Harga */}
          <div className="text-2xl font-semibold text-primary mb-4">
            Rp {totalHarga.toLocaleString("id-ID")}
          </div>

          {/* Tombol */}
          <div className="flex items-center space-x-3">
            <div className="flex border border-[#F46F22] rounded">
              <button
                className="px-3 py-1 font-bold text-[#F46F22]"
                onClick={decrement}
              >
                -
              </button>
              <div className="px-4 py-1 border-l border-r">{jumlah}</div>
              <button
                className="px-3 py-1 font-bold text-[#F46F22]"
                onClick={increment}
              >
                +
              </button>
            </div>
            <button
              className="px-4 py-2 bg-[#4E2C83] text-white rounded-lg hover:bg-white hover:text-[#4E2C83] border-[#4E2C83] border transition"
              onClick={handleAddToCart}
            >
              Tambahkan ke Keranjang
            </button>

            {showCartLoginModal && (
              <div className="fixed inset-0 flex items-start justify-center z-[9999]">
                <div className="mt-16 bg-white border-2 border-[#F46F22] rounded-xl shadow-xl px-8 py-5 max-w-5xl flex items-center gap-4">
                  <div className=" border-[#F46F22]">
                    <img src="/warning.png" alt="!" className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#F46F22] mb-1">
                      Harap melakukan Login!
                    </p>
                    <p className="text-black text-sm">
                      Login diperlukan untuk mengakses keranjang produk.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              className="px-4 py-2 border border-[#F46F22] text-[#F46F22] rounded-lg hover:bg-[#F46F22] hover:text-white transition"
              onClick={handleBuyProduct}
            >
              Beli Produk
            </button>
          </div>
        </div>
      </div>

      {showLoginRequired && (
        <div className="fixed inset-0 flex items-start justify-center z-[9999]">
          <div className="mt-16 bg-white border-2 border-[#F6A700] rounded-xl shadow-xl px-8 py-5 max-w-5xl flex items-center gap-4">
            <div className=" border-[#F6A700]">
              <img src="/warning.png" alt="!" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#F6A700] mb-1">
                Harap Melakukan Login!
              </p>
              <p className="text-black text-sm">
                Login diperlukan untuk pembelian produk.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigasi */}
      <div className="relative mt-12">
        <div className="flex justify-between text-center">
          <button
            onClick={() => setActiveTab("spesifikasi")}
            className={`flex-1 pb-3 font-medium transition ${
              activeTab === "spesifikasi"
                ? "text-[#F46F22]"
                : "text-gray-800 hover:text-[#F46F22]"
            }`}
          >
            Spesifikasi Produk
          </button>
          <button
            onClick={() => setActiveTab("ulasan")}
            className={`flex-1 pb-3 font-medium transition ${
              activeTab === "ulasan"
                ? "text-[#F46F22]"
                : "text-gray-800 hover:text-[#F46F22]"
            }`}
          >
            Rating & Ulasan
          </button>
          <button
            onClick={() => setActiveTab("selengkapnya")}
            className={`flex-1 pb-3 font-medium transition ${
              activeTab === "selengkapnya"
                ? "text-[#F46F22]"
                : "text-gray-800 hover:text-[#F46F22]"
            }`}
          >
            Pelajari Selengkapnya
          </button>
        </div>
        {/* Garis abu-abu */}
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-gray-300 w-full rounded" />
        {/* Garis orange tab aktif */}
        <div
          className="absolute bottom-0 h-1 bg-[#F46F22] rounded transition-all duration-300"
          style={{
            left:
              activeTab === "spesifikasi"
                ? "0%"
                : activeTab === "ulasan"
                ? "33.3333%"
                : "66.6666%",
            width: "33.3333%",
          }}
        />
      </div>

      {/* Konten Berdasarkan Tab */}
      <div className="mt-6 text-sm">
        {activeTab === "spesifikasi" && (
          <>
            <section>
              <h2 className="text-2xl font-semibold text-[#4E2C83] mb-4">
                Spesifikasi Produk
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc text-lg pl-5 space-y-1">
                  <li>Vertical Kiosk Signage</li>
                  <li>1920*1080 FHD</li>
                  <li>WiFi & LAN & USB</li>
                  <li>2x5W speakers</li>
                  <li>Metal frame with tempered glass</li>
                  <li>IR touch screen 10 point</li>
                </ul>
                <ul className="list-disc text-lg pl-5 space-y-1">
                  <li>6th Gen I5 with 4g ram+128g ssd</li>
                  <li>Win 10 pro English language</li>
                  <li>Brightness: 450 nits</li>
                  <li>Power EU Plug</li>
                  <li>Move wheels</li>
                </ul>
              </div>
            </section>

            {/* Gambar Spesifikasi */}
            <section className="mt-12">
              <h2 className="text-xl text-[#4E2C83] font-semibold mb-4">
                Detail Spesifikasi Produk
              </h2>
              <div className="w-full">
                <img
                  src="/detail/kiosk.png"
                  alt="Detail Spesifikasi Produk"
                  className="w-full h-auto rounded shadow"
                />
              </div>
            </section>
          </>
        )}

        {activeTab === "ulasan" && (
          <section>
            <h2 className="text-xl font-bold text-[#F46F22] mb-4">
              Rating & Ulasan
            </h2>

            {/* Ringkasan Rating */}
            <div className="mb-6 flex flex-col md:flex-row gap-6">
              {/* Rating Total */}
              <div className="flex-1">
                <div className="flex items-center text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} fill="currentColor" />
                  ))}
                  <span className="ml-2 text-gray-800 font-semibold text-lg">
                    4.5 | 6 Ulasan
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  *Pilih baris berikut untuk memfilter ulasan.
                </p>
              </div>

              {/* Breakdown Rating */}
              <div className="flex-1 space-y-1">
                {[5, 4, 3, 2, 1].map((bintang) => {
                  const count = reviews.filter(
                    (r) => r.rating === bintang
                  ).length;
                  const percent = (count / reviews.length) * 100;
                  return (
                    <div
                      key={bintang}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span>{bintang}</span>
                      <div className="w-full bg-gray-200 rounded h-2">
                        <div
                          className="bg-[#F46F22] h-2 rounded"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="w-4 text-right">{count}</span>
                    </div>
                  );
                })}
              </div>

              {/* Tulis Ulasan */}
              <div className="flex-1 text-center border border-dashed p-4 rounded">
                <p className="text-sm text-gray-500 mb-2">
                  Punya pengalaman dengan produk ini?
                </p>
                <button
                  className="flex items-center justify-center w-full border rounded-md py-1.5 hover:border-[#F46F22] hover:text-[#F46F22] text-gray-500"
                  onClick={() => setShowReviewModal(true)}
                >
                  <Star className="mr-1" size={16} /> Tulis Ulasan
                </button>
              </div>
            </div>

            {/* Dropdown Filter */}
            <div className="flex justify-end mb-4">
              <select
                className="border text-sm px-3 py-1 rounded-md"
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  setCurrentPage(1); // reset ke halaman pertama
                }}
                value={sortOrder}
              >
                <option value="desc">Terbaru ke Terlama</option>
                <option value="asc">Terlama ke Terbaru</option>
              </select>
            </div>

            {/* Daftar Ulasan */}
            <div className="space-y-6">
              {paginatedReviews.map((r, i) => (
                <div key={i} className="border-b pb-4 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-xl text-[#4E2C83]">
                      {r.nama}
                    </span>
                    <span className="text-sm text-gray-400">{r.tanggal}</span>
                  </div>
                  <div className="flex items-center text-yellow-500 mb-6">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={28} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{r.judul}</h3>
                  <p className="text-sm text-gray-700">{r.deskripsi}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-6 space-x-2">
              <button
                className="px-3 py-1 border border-[#F46F22] rounded text-lg hover:text-white hover:bg-[#F46F22]"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border border-[#F46F22] rounded text-lg ${
                    currentPage === i + 1
                      ? "bg-[#F46F22] text-white font-semibold"
                      : "hover:bg-[#F46F22] hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="px-3 py-1 border border-[#F46F22] rounded text-lg hover:text-white hover:bg-[#F46F22]"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </section>
        )}

        {activeTab === "selengkapnya" && (
          <section className="space-y-16">
            {/* Layar Sentuh Interaktif */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img
                src="/performa.png"
                alt="Layar Sentuh Interaktif"
                className="w-full rounded-md shadow"
              />
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold mb-2">
                  Layar Sentuh Interaktif
                </h3>
                <p className="text-black text-xl">
                  Secara responsif menampilkan informasi dalam berbagai
                  format—teks, gambar, maupun video—untuk memudahkan interaksi
                  pengguna secara mandiri dan efisien.
                </p>
              </div>
            </div>

            {/* Performa Tangguh */}
            <div
              className="relative w-full h-[600px] md:h-[700px]  overflow-hidden flex items-center mb-12"
              style={{
                backgroundImage: "url('/bg-performa.png')", // ganti path sesuai gambar background kamu
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay gelap agar teks lebih jelas */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Teks di tengah */}
              <div className="relative z-10 flex-1 flex flex-col justify-center items-center h-full text-center px-4">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  Performa Tangguh
                </h3>
                <p className="text-white text-base md:text-xl font-medium max-w-2xl drop-shadow">
                  Ditenagai oleh Intel 6th Gen i5, RAM 4GB, dan SSD 128GB, cukup
                  untuk menjalankan berbagai aplikasi digital signage dan
                  layanan mandiri.
                </p>
              </div>
              {/* Gambar produk di kanan */}
              <div className="relative z-10 hidden md:flex h-full items-end justify-end gap-6 pr-12">
                <img
                  src="/performa2.png"
                  alt="Performa Tangguh"
                  className="h-[90%] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Bodi Kuat dan Elegan */}
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold">Bodi Kuat dan Elegan</h3>
              <p className="text-black text-lg max-w-8xl mx-auto">
                Menggunakan rangka metal dengan kaca tempered untuk perlindungan
                ekstra dan kesan premium.
              </p>
              <img
                src="/bodi-kuat.png"
                alt="Bodi Kuat dan Elegan"
                className="w-full rounded-md shadow mx-auto"
              />
            </div>

            {/* Gambar Spesifikasi */}
            <section className="mt-12">
              <h2 className="text-xl text-[#4E2C83] font-semibold mb-4">
                Detail Spesifikasi Produk
              </h2>
              <div className="w-full">
                <img
                  src="/detail/kiosk.png"
                  alt="Detail Spesifikasi Produk"
                  className="w-full h-auto rounded shadow"
                />
              </div>
            </section>

            {/* Bantuan Section */}
            <section className="bg-white py-8 mt-20 ">
              <div className="text-center mb-10 max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  Bantuan & Akses Cepat
                </h2>
                <p className="text-black mt-2">
                  Akses informasi lengkap dalam genggaman.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 max-w-7xl mx-auto place-items-center">
                {[
                  {
                    title: "Hubungi Kami",
                    desc: "Butuh jawaban cepat? Hubungi tim kami untuk konsultasi langsung seputar produk dan layanan.",
                    icon: "/11.png",
                    action: () =>
                      window.open("https://wa.me/6285156949282", "_blank"),
                  },
                  {
                    title: "Kirim Email ke Kami",
                    desc: "Kirim pertanyaan, atau kerja sama melalui email dan tim kami akan segera merespons.",
                    icon: "/12.png",
                    action: () =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=Magnustek@gmail.com&su=Konsultasi%20Produk%20Magnustek&body=Halo%20Magnustek%2C%20saya%20ingin%20bertanya%20tentang%20produk%20dan%20layanan.",
                        "_blank"
                      ),
                  },
                  {
                    title: "Mitra Kami",
                    desc: "Telah mendukung berbagai proyek besar di sektor periklanan, event, dan korporasi.",
                    icon: "/7.png",
                    action: () => (window.location.href = "/mitra"),
                  },
                  {
                    title: "Pusat Bantuan Produk",
                    desc: "Temukan panduan penggunaan dan solusi teknis untuk semua produk kami.",
                    icon: "/13.png",
                    action: () => (window.location.href = "/tentang/bantuan"),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F46F22] rounded-xl py-4 w-[300px] flex flex-col items-center text-white text-center shadow-lg"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-auto h-36 mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-[10px] mb-4">{item.desc}</p>
                    <button
                      className="w-12 h-12 bg-white text-[#F46F22] rounded-full flex items-center justify-center hover:bg-[#F46F22] hover:text-white hover:scale-110 transition-all duration-300 border-2"
                      onClick={item.action}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Product Catalogue Section */}
            <section className="bg-[#4E2C83] mx-auto max-w-11/12 py-6 px-4 md:px-12 rounded-xl mt-20 mb-20">
              <div className="max-w-11/12 mx-auto text-center text-white">
                <img
                  src="/14.png"
                  alt="Catalogue Icon"
                  className="mx-auto w-auto h-48 mb-6"
                />
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Our Product Catalogue
                </h2>
                <p className="text-sm md:text-base mb-6">
                  Unduh katalog lengkap kami untuk melihat semua spesifikasi
                  produk, fitur unggulan, dan inspirasi penggunaan dalam
                  berbagai sektor industri.
                </p>
                <a
                  href="/downloads/Magnustek.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white border border-white text-[#4E2C83] font-semibold py-2 px-5 rounded-full shadow hover:bg-[#4E2C83] hover:text-white transition"
                >
                  Download Katalog Produk
                </a>
              </div>
            </section>
          </section>
        )}
      </div>
    </div>
  );
};

export default DetailKiosk;
