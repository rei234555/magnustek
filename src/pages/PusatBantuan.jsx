import React, { useState } from "react";

const tabs = ["Umum", "Produk", "Instalasi", "Pemeliharaan", "Garansi"];

const faqs = [
  {
    category: "Umum",
    question: "Apa itu videotron?",
    answer:
      "Videotron adalah media digital LED untuk menampilkan gambar atau video dalam skala besar, sering digunakan di ruang publik.",
  },
  {
    category: "Produk",
    question: "Apa saja jenis videotron yang tersedia?",
    answer:
      "Kami menyediakan videotron indoor dan outdoor dengan berbagai ukuran pixel pitch sesuai kebutuhan proyek Anda.",
  },
  {
    category: "Produk",
    question: "Berapa lama umur videotron?",
    answer:
      "Umur videotron dapat mencapai 50.000-100.000 jam tergantung pemakaian dan perawatan.",
  },
  {
    category: "Garansi",
    question: "Apakah videotron tahan terhadap cuaca ekstrem?",
    answer:
      "Videotron outdoor kami dirancang tahan air dan panas, cocok untuk berbagai kondisi lingkungan di Indonesia.",
  },
];

const PusatBantuan = () => {
  const [activeTab, setActiveTab] = useState("Umum");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQ berdasarkan tab aktif
  const filteredFaqs = faqs.filter((faq) => faq.category === activeTab);

  return (
    <section className="bg-gray-50 min-h-screen px-4 md:px-10 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-black mb-10">
          Pertanyaan yang Sering Diajukan
        </h1>
        <p className="text-gray-600">
          Temukan jawaban atas pertanyaan Anda melalui FAQ kami.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 overflow-x-auto border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(null); // tutup dropdown saat ganti tab
            }}
            className={`font-medium pb-2 ${
              activeTab === tab
                ? "text-black border-b-2 border-red-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ Dropdowns */}
      <section className="space-y-10 max-w-11/12 mx-auto mt-8 mb-8">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className=" rounded-xl">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center font-medium text-xl text-black rounded-xl"
            >
              <span>Q. {faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="bg-[#4E2C83] border border-gray-300 rounded-xl px-8 py-7 mb-10 mx-4 mt-6 text-black text-base">
                <span className="text-white font-medium mr-2">A.</span>
                <span className="text-white align-top">{faq.answer}</span>
              </div>
            )}
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

export default PusatBantuan;
