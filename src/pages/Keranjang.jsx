import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    title: "P1.2 INDOOR LED",
    category: "LED Videotron Indoor",
    rating: "★★★★★",
    banyak: "(1)",
    price: "Rp 40.000.000",
    image: "/produk/LED-Indoor/P1.2.png",
  },
  {
    title: "P1.8 LED Banner",
    category: "LED Banner",
    rating: "★★★★★",
    banyak: "(1)",
    price: "Rp 40.000.000",
    image: "/produk/LED-Indoor/P1.8.png",
  },
  {
    title: "Interactive Smartboard",
    category: "Interactive Smartboard",
    rating: "★★★★★",
    banyak: "(1)",
    price: "Rp 40.000.000",
    image: "/produk/smartboard.png",
  },
  {
    title: "PTZ Camera HD 20x ZOOM",
    category: "Conference System",
    rating: "★★★★★",
    banyak: "(1)",
    price: "Rp 40.000.000",
    image: "/produk/ptz.png",
  },
  {
    title: "Standing Kiosk",
    category: "Smart Digital",
    rating: "★★★★★",
    banyak: "(1)",
    price: "Rp 20.000.000",
    image: "/produk/kiosk.png",
  },
];

const Wishlist = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, products.length - visibleCount)
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="max-w-11/12 mx-auto p-4">
      {/* Wishlist Kosong */}
      <section className="border border-[#F46F22] rounded-xl p-10 mt-5 text-center">
        <img
          src="/16.png"
          alt="wishlist kosong"
          className="mx-auto mb-4 w-40 h-40"
        />
        <h2 className="text-xl font-semibold mb-2">
          Keranjang Anda Masih Kosong
        </h2>
        <p className="text-gray-500 mb-6">
          Ingin produk yang diinginkan? Tambahkan ke keranjang sekarang!
        </p>
        <button className="bg-[#4E2C83] text-white px-6 py-2 rounded-xl hover:bg-white hover:text-[#4E2C83] border border-[#4E2C83] transition">
          Mulai Belanja
        </button>
      </section>

      {/* Rekomendasi Produk */}
      <section className="flex justify-between items-center mt-20 mb-5">
        <h3 className="text-lg font-semibold text-[#4E2C83]">
          Rekomendasi Produk
        </h3>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 border rounded-full ${
              startIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= products.length}
            className={`p-2 border rounded-full ${
              startIndex + visibleCount >= products.length
                ? "text-gray-300 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Card Produk */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {visibleProducts.map((product, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border-2 border-[#F46F22] p-4 flex flex-col shadow-sm"
          >
            <span className="text-xs text-gray-400 font-medium mb-1">
              {product.category}
            </span>
            <h3 className="text-base font-medium">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto my-4"
            />
            <div className="flex items-center gap-1 mb-2">
              <p className="text-2xl text-yellow-400">{product.rating}</p>
              <p className="text-xl">{product.banyak}</p>
            </div>
            <p className="text-[#F46F22] font-medium text-2xl mb-3">
              {product.price}
            </p>
            <div className="flex items-center justify-center gap-8">
              <button className="mt-auto text-xs border-1 bg-white text-[#4E2C83] px-4 py-2 rounded-xl hover:bg-[#4E2C83] hover:text-white transition">
                Selengkapnya
              </button>
              <button className="mt-auto text-xs bg-[#F46F22] text-white px-4 py-2 rounded-xl hover:bg-white hover:text-[#F46F22] hover:border-1 transition">
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
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
            Unduh katalog lengkap kami untuk melihat semua spesifikasi produk,
            fitur unggulan, dan inspirasi penggunaan dalam berbagai sektor
            industri.
          </p>
          <a
            href="/downloads/Magnustek.pdf"
            download="Magnustek.pdf"
            className="inline-block bg-white border border-white text-[#4E2C83] font-semibold py-2 px-5 rounded-full shadow hover:bg-[#4E2C83] hover:text-white transition"
          >
            Download Katalog Produk
          </a>
        </div>
      </section>
    </section>
  );
};

export default Wishlist;
