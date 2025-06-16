import React from "react";

const Sertifikat = () => {
  return (
    <section>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img
          src="/bg-magnus.png"
          alt="MagnusTek"
          className="w-full h-[600px] object-cover"
        />
        {/* Overlay gelap */}
        <div className="absolute inset-0 " />
        {/* Logo & Visi Misi */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <img
            src="/Magnus.png"
            alt="MagnusTek Logo"
            className="w-[420px] max-w-full mb-8"
            style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.3))" }}
          />
          <p className="text-base md:text-lg font-medium max-w-6xl mx-auto">
            Menjadi pelopor solusi teknologi LED dan videotron yang inovatif dan
            berkualitas tinggi untuk mendukung transformasi digital,
            meningkatkan visibilitas merek, serta memberikan pengalaman visual
            terbaik bagi pelanggan di seluruh Indonesia.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 bg-white mt-10">
        <h2 className="text-center text-4xl font-semibold text-[#F46F22] mb-10">
          Sertifikat Produk
        </h2>
        <div className="flex justify-center">
          <img
            src="/Sertifiikat1.png"
            alt="Sertifikat Produk"
            className="w-full max-w-6xl"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 bg-white mt-10 border-[#F46F22] border-b-2 pb-10">
        <div className="flex justify-center">
          <img
            src="/Sertifiikat2.png"
            alt="Sertifikat Produk"
            className="w-full max-w-6xl"
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

export default Sertifikat;
