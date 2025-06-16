import React from "react";

const Mitra = () => {
  const partners = [
    {
      name: "MITRA VISUAL GROUP",
      logo: "/mitra/MVG.png",
      locations: ["Jl. Kuwukan 4 no.51, Sambikerep, Surabaya (60217)"],
      whatsapp: "+6287776448988",
      email: "support_ap@lednets.com",
      maps: [
        "https://maps.google.com/?q=Jl. Kuwukan 4 no.51, Sambikerep, Surabaya 60217",
      ],
    },
    {
      name: "Colorlight",
      logo: "/mitra/Color.png",
      locations: ["Jl. Kuwukan 4 no.51, Sambikerep, Surabaya (60217)"],
      whatsapp: "+6287776448988",
      email: "support_ap@lednets.com",
      maps: [
        "https://maps.google.com/?q=Jl. Kuwukan 4 no.51, Sambikerep, Surabaya 60217",
      ],
    },
    {
      name: "MEAN Real",
      logo: "/mitra/Mean.png",
      locations: ["Jl. Kuwukan 4 no.51, Sambikerep, Surabaya (60217)"],
      whatsapp: "+6287776448988",
      email: "support_ap@lednets.com",
      maps: [
        "https://maps.google.com/?q=Jl. Kuwukan 4 no.51, Sambikerep, Surabaya 60217",
      ],
    },
    {
      name: "MOKA SFX",
      logo: "/mitra/Moka.png",
      locations: ["Jl. Kuwukan 4 no.51, Sambikerep, Surabaya (60217)"],
      whatsapp: "+6287776448988",
      email: "support_ap@lednets.com",
      maps: [
        "https://maps.google.com/?q=Jl. Kuwukan 4 no.51, Sambikerep, Surabaya 60217",
      ],
    },
    {
      name: "NOVA STAR",
      logo: "/mitra/Nova.png",
      locations: ["Jl. Kuwukan 4 no.51, Sambikerep, Surabaya (60217)"],
      whatsapp: "+6287776448988",
      email: "support_ap@lednets.com",
      maps: [
        "https://maps.google.com/?q=Jl. Kuwukan 4 no.51, Sambikerep, Surabaya 60217",
      ],
    },
    {
      name: "Qiangli Indonesia",
      logo: "/mitra/Qiangli.png",
      locations: ["Jl. Kuwukan 4 no.51, Sambikerep, Surabaya (60217)"],
      whatsapp: "+6287776448988",
      email: "support_ap@lednets.com",
      maps: [
        "https://maps.google.com/?q=Jl. Kuwukan 4 no.51, Sambikerep, Surabaya 60217",
      ],
    },
  ];

  const icons = [
    {
      img: "/mitra/6.png",
      title: "Integrasi Produk & Layanan Secara Menyeluruh",
    },
    {
      img: "/mitra/8.png",
      title: "Kolaborasi Strategis dengan Tim Inovasi Kami",
    },
    {
      img: "/mitra/7.png",
      title: "Kemitraan Jangka Panjang yang Fleksibel",
    },
    {
      img: "/mitra/9.png",
      title: "Sertifikasi dan Standar Nasional",
    },
  ];

  return (
    <section className="max-w-full mx-auto">
      <section
        className="h-[680px] bg-cover bg-center relative  border-b-2 border-[#4E2C83] justify-center mx-auto items- pb-6 max-w-full"
        style={{
          backgroundImage: "url('/mitra/MitraBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">
            Bersama Membangun Inovasi Digital
          </h1>
          <p className="text-white">Kami percaya kolaborasi</p>
        </section>

        <section className="text-center mb-30">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">
            Bersama Membangun Inovasi Digital
          </h1>
          <p className="text-black text-xl mt-4">
            Kami percaya kolaborasi adalah kunci.
          </p>
          <p className="max-w-4xl mx-auto text-xl text-black mt-4">
            Bekerja sama dengan para mitra terbaik untuk menghadirkan solusi
            teknologi yang berdampak nyata. Mari tumbuh bersama dalam ekosistem
            digital yang terus berkembang.
          </p>
        </section>

        <section className="mb-20 justify-center mx-auto items- pb-6 max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10 justify-center max-w-10/12 mx-auto">
            {icons.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-1 border-purple-300 shadow shadow-purple-300 rounded-2xl p-4 flex flex-col items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-40 h-40 mb-2"
                />
                <div className="font-semibold text-center text-lg">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="mb-2 border-b-2 border-[#4E2C83] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mitra Terbaik, Solusi Hebat.
            </h2>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">
              Kami menjalin kerja sama dengan mitra-mitra terpercaya yang
              memiliki kompetensi tinggi di bidangnya. Bersama mereka, kami
              menghadirkan solusi yang tepat, efisien, dan berstandar nasional.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border-1 border-[#4E2C83] shadow-sm hover:shadow-md hover:scale-100 transition-shadow p-6 flex flex-col items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <p className="text-md font-semibold text-black text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-full mx-auto px-4 py-16">
        <section className="max-w-7xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">
            Lihat Detail Mitra Kami
          </h3>
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border-b border-blue-800 p-4 flex flex-col md:flex-row gap-6 mb-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="rounded-xl border border-blue-800 w-32 h-32 object-contain"
              />
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-lg mt-2 mb-4">
                  {partner.name}
                </h4>
                <div className="text-sm text-gray-700 mb-6 space-y-1">
                  {partner.locations.map((loc, i) => (
                    <p key={i}>{loc}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${partner.whatsapp.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-green-500 text-green-600 px-3 py-1 rounded-full text-sm"
                  >
                    <span>📱</span>
                    {partner.whatsapp}
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${partner.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-red-500 text-red-600 px-3 py-1 rounded-full text-sm"
                  >
                    <span>✉️</span>
                    {partner.email}
                  </a>

                  {partner.maps.map((url, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-black text-black px-3 py-1 rounded-full text-sm"
                    >
                      <span>📍</span>
                      Lihat Lokasi Mitra
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
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

export default Mitra;
