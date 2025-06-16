import React, { useState } from "react";
import { Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailKiosk = () => {
  const navigate = useNavigate();

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
      rating: 5,
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
      rating: 2,
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
              <button className="bg-[#4E2C83] text-white text-sm px-4 py-1.5 rounded-lg hover:bg-white hover:text-[#4E2C83] border border-[#4E2C83] transition">
                Beri Ulasan
              </button>
              <button
                onClick={() => navigate("/wishlist")}
                className="text-gray-400 hover:text-[#4E2C83] transition"
                aria-label="Tambah ke Wishlist"
              >
                <Heart size={28} />
              </button>
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
            <button className="px-4 py-2 bg-[#4E2C83] text-white rounded-lg hover:bg-white hover:text-[#4E2C83] border-[#4E2C83] border transition">
              Tambahkan ke Keranjang
            </button>
            <button
              className="px-4 py-2 border border-[#F46F22] text-[#F46F22] rounded-lg hover:bg-[#F46F22] hover:text-white transition"
              onClick={() => navigate("/beli/beli-kiosk")}
            >
              Beli Produk
            </button>
          </div>
        </div>
      </div>

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
                    4.5 | 5 Ulasan
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  70% dari pembeli merasa puas dengan produk ini.
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
                <button className="flex items-center justify-center w-full border rounded-md py-1.5 hover:border-[#F46F22] hover:text-[#F46F22] text-gray-500">
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

            {/* Rating & Ulasan */}
            <div className="border-b border-[#4E2C83] py-5 mb-20 pt-6 mt-10">
              <h3 className="text-2xl font-bold text-[#4E2C83] mb-4">
                Rating & Ulasan
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Kiri: Ringkasan Rating */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-yellow-400 text-2xl">★★★★★</div>
                    <span className="text-gray-600 text-lg font-medium">
                      4.5 | 5 Ulasan
                    </span>
                  </div>
                  <p className="text-xs text-[#4E2C83] mb-2">
                    *Pilih baris berikut untuk memfilter ulasan.
                  </p>
                  {/* Bar Rating */}
                  {[5, 4, 3, 2, 1].map((star) => {
                    const total = 5;
                    const ratings = { 5: 2, 4: 1, 3: 2, 2: 0, 1: 0 };
                    const count = ratings[star] || 0;
                    const width = (count / total) * 100;
                    return (
                      <div key={star} className="flex items-center mb-1">
                        <span className="w-4 text-sm">{star}</span>
                        <div className="flex-1 h-3 bg-gray-300 rounded mx-2 relative overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{ width: `${width}%` }}
                          ></div>
                        </div>
                        <span className="w-4 text-sm text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
                {/* Kanan: Form Rating */}
                <div className="flex flex-col items-end top-[50px]">
                  <p className="text-sm text-[#4E2C83] mb-2">
                    Beri ulasan untuk produk ini
                  </p>
                  <div className="flex gap-2 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <button
                        key={i}
                        className="text-yellow-400 text-2xl border border-yellow-400 rounded p-2 hover:bg-yellow-100 transition"
                      >
                        ☆
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-[#4E2C83] mt-1">
                    *Penambahan ulasan perlu membuat akun terlebih dahulu.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default DetailKiosk;
