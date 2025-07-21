import React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryGrid from "../../components/CategoryGrid";

const LED = () => {
  const [slide, setSlide] = useState(0);
  const images = ["/hero/BG4.png", "/hero/BG5.png"];
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 3;
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();

  const products = [
    {
      title: "P1.2 INDOOR LED",
      category: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 94.320.000",
      image: "/produk/LED-Indoor/P1.2.png",
    },
    {
      title: "P2.5 INDOOR LED",
      category: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 29.803.500",
      image: "/produk/LED-Indoor/P2.5.png",
    },
    {
      title: "P4 INDOOR LED",
      category: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 26.307.000",
      image: "/produk/LED-Indoor/P4.png",
    },
    {
      title: "P1.8 INDOOR LED",
      category: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 26.307.000",
      image: "/produk/LED-Indoor/P1.8.png",
    },
    {
      title: "P8 OUTDOOR LED",
      category: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/P8.png",
    },
    {
      title: "P3.9 Hybrid LED",
      category: "Portable/ Event Series",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 32.967.000",
      image: "/produk/hybrid/HYBRID.P3.png",
    },
    {
      title: "P2.6 Hybrid LED",
      category: "Portable/ Event Series",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 32.967.000",
      image: "/produk/hybrid/HYBRID.P2.png",
    },
    {
      title: "MAGNUSTEK P2.5 LED Banner",
      category: "Led Banner",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 54.778.000",
      image: "/produk/banner/BANNER.P2.png",
    },
    {
      title: "MAGNUSTEK P1.8 LED Banner",
      category: "Led Banner",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 54.778.000",
      image: "/produk/banner/BANNER.P1.png",
    },
    {
      title: "P1.5 INDOOR LED",
      category: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/LED-Indoor/P1.5.png",
    },
    {
      title: "P1.2 COB INDOOR LED",
      category: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/LED-Indoor/cob1.png",
    },
    {
      title: "P0.9 COB INDOOR LED",
      category: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/LED-Indoor/cob2.png",
    },
    {
      title: "P2.5 OUTDOOR LED",
      category: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p2.5outdoor.png",
    },
    {
      title: "P2 OUTDOOR LED",
      category: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p2outdoor.png",
    },
    {
      title: "P4 OUTDOOR LED",
      category: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p4outdoor.png",
    },
    {
      title: "P5 OUTDOOR LED",
      category: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p5outdoor.png",
    },
    {
      title: "WALL / VIDEOWALL DISPLAY",
      category: "TV Wall",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 67.200.000",
      image: "/produk/TV-WALL.png",
    },
    {
      title: "MAGNUSTEK ALL IN ONE SCREEN",
      category: "All In One Screen",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/ALL-IN-ONE.png",
    },
    {
      title: "SMARTBOARD TOUCH SCREEN",
      category: "INTERACTIVE SMARTBOARD",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/smartboard.png",
    },
    {
      title: "PTZ Camera HD 20x ZOOM",
      category: "Conference System",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/ptz.png",
    },
    {
      title: "MAGNUSTEK VEGA",
      category: "Conference System",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/vega.png",
    },
    {
      title: "DIGITAL SIGNAGE TOUCHSCREEN",
      category: "Standing Kiosk",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/kiosk.png",
    },
  ];

  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
            currentPage === i
              ? "bg-[#F46F22] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const subCategories = [
    {
      label: "Semua Produk",
      path: "/produk/all",
    },
    {
      label: "LED Indoor",
      path: "/sub/indoor",
    },
    {
      label: "LED Outdoor",
      path: "/sub/outdoor",
    },
    {
      label: "Portable / Event Series",
      path: "/sub/portable",
    },
    {
      label: "LED Banner",
      path: "/sub/banner",
    },
    {
      label: "TV Wall/ Commercial Display",
      path: "/sub/tv-display",
    },
    {
      label: "All In One Screen",
      path: "/sub/all-in-one",
    },
    {
      label: "Conference System",
      path: "/sub/conference",
    },
    {
      label: "Interactive Smartboard",
      path: "/sub/interactive",
    },
    {
      label: "Standing Kiosk",
      path: "/sub/kiosk",
    },
  ];

  return (
    <section className="w-full overflow-hidden text-white bg-white">
      {/* Hero Carousel */}
      <section className="relative h-[740px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${images[slide]})`,
          }}
        >
          <div className="absolute inset-0 " />
        </div>

        {/* Carousel Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`w-32 h-1.5 rounded-full transition-all duration-300 ${
                slide === index ? "bg-white" : "bg-gray-400/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Categories Section */}
      <div>
        <CategoryGrid />
      </div>

      <section className="bg-white py-8 border-b-2 border-[#4E2C83]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-black">
              Pilihan Terbaik Untuk Anda
            </h3>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full border text-black border-gray-300 hover:bg-[#4E2C83] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 " />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-full border text-black border-gray-300 hover:bg-[#4E2C83] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {subCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => navigate(category.path)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap
                  ${
                    location.pathname === category.path
                      ? "bg-[#F46F22] text-white border-2 border-[#F46F22]"
                      : "bg-gray-100 text-gray-700 hover:bg-[#F46F22] hover:text-white hover:shadow-sm"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Filter Section */}
      <section className="bg-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-">
          <div className="flex items-center justify-end">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option value="">Paling Sesuai</option>
                <option value="price_low">Harga Terendah</option>
                <option value="price_high">Harga Tertinggi</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Section */}
      <section className="px-2 py-10 bg-white text-black">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {currentProducts.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-[#F46F22] p-4 flex flex-col shadow-sm relative"
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
                <p className="text-2xl text-yellow-400 ">{product.rating}</p>
                <p className="text-xl ">{product.banyak}</p>
              </div>
              <p className="text-[#F46F22] font-medium text-2xl mb-3">
                {product.price}
              </p>

              <div className="flex items-center justify-center gap-4">
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

        {/* Pagination Section */}
        <section className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-end items-center gap-2">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {renderPageNumbers()}

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
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

export default LED;
