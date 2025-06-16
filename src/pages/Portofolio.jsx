import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useRef, useState } from "react";
import React from "react";

const Portofolio = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="relative w-full h-[700px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/video/Hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Karya Nyata, Bukti Kepercayaan
          </h1>
          <p className="text-base md:text-lg max-w-3xl">
            Jelajahi berbagai proyek dan solusi yang telah kami realisasikan
            bersama klien dari berbagai industri. Setiap portofolio mencerminkan
            dedikasi kami dalam memberikan hasil terbaik dan bernilai.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <section className="flex flex-col md:flex-row gap-8 p-10 md:items-center bg-[#f8f8f8]">
        {/* TEXT SIDE */}
        <div className="md:w-2/5 w-full space-y-4">
          <h2 className="text-[#4E2E8F] text-4xl font-semibold">
            MagnusTek di ISPE 2024: <br /> Inovasi untuk Pengadaan Berkelanjutan
          </h2>
          <p className="text-xl text-gray-700">
            Cuplikan momen MagnusTek dalam ajang ISPE 2024, menghadirkan solusi
            pengadaan berkelanjutan bagi pelaku usaha dan industri di Indonesia.
            Saksikan komitmen kami dalam mendukung efisiensi, transparansi, dan
            inovasi dalam dunia pengadaan.
          </p>
        </div>

        {/* VIDEO SIDE */}
        <div className="md:w-3/5 w-full h-[700px] rounded-lg overflow-hidden shadow-md relative">
          <video
            ref={videoRef}
            src="/video/2.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button
              onClick={togglePlay}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Kartu Produk */}
      <section className="p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kartu 1 */}
        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 p-6 flex flex-col items-center text-center bg-white">
          <img
            src="/Port2.png"
            alt="P4 Outdoor LED"
            className="rounded-md mb-4"
          />
          <div className="flex gap-2">
            <button className="border border-[#4E2E8F] text-[#4E2E8F] px-4 py-2 rounded-full text-sm hover:bg-[#4E2E8F] hover:text-white transition">
              Selengkapnya
            </button>
            <button className="bg-[#4E2E8F] text-white px-4 py-2 rounded-full text-sm hover:bg-white border-1 hover:text-[#4E2E8F] transition">
              Beli Produk
            </button>
          </div>
        </div>

        {/* Kartu 2 */}
        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 p-6 flex flex-col items-center text-center bg-white">
          <img
            src="/Port1.png"
            alt="P8 Outdoor LED"
            className="rounded-md mb-4"
          />
          <div className="flex gap-2">
            <button className="border border-[#4E2E8F] text-[#4E2E8F] px-4 py-2 rounded-full text-sm hover:bg-[#4E2E8F] hover:text-white transition">
              Selengkapnya
            </button>
            <button className="bg-[#4E2E8F] text-white px-4 py-2 rounded-full text-sm hover:bg-white border-1 hover:text-[#4E2E8F] transition">
              Beli Produk
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Video dan Teks */}
      <section className="flex flex-col-reverse md:flex-row gap-8 p-10 md:items-center bg-white">
        {/* VIDEO */}
        <div className="md:w-3/5 w-full rounded-lg overflow-hidden shadow-md">
          <video
            src="/video/1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="md:w-2/5 w-full space-y-4 text-left">
          <h2 className="text-[#4E2E8F] text-3xl font-semibold">
            Tampilan Lebih Terang, <br /> Pesan Lebih Jelas.
          </h2>
          <p className="text-lg text-gray-700">
            Dapatkan tampilan yang tajam, nyaman dilihat, dan mendukung
            komunikasi visual lebih efektif di setiap pertemuan penting Anda.
          </p>
        </div>
      </section>

      {/* SECTION 5 - Hasil Pemasangan Produk Kami */}
      <section className="py-16 px-20 justify-center items-center max-w-full bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-black px-6 mb-6">
          Hasil Pemasangan Produk Kami
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-6"
        >
          {["1.mp4", "2.mp4", "3.mp4"].map((file, index) => {
            const videoRef = useRef(null);
            const [isPlaying, setIsPlaying] = useState(false);
            const [isMuted, setIsMuted] = useState(true);

            const togglePlay = () => {
              if (!videoRef.current) return;
              if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
              } else {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            };

            const toggleMute = () => {
              if (!videoRef.current) return;
              videoRef.current.muted = !videoRef.current.muted;
              setIsMuted(!isMuted);
            };

            return (
              <SwiperSlide
                key={index}
                className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-black flex justify-center items-center relative"
              >
                <video
                  ref={videoRef}
                  src={`/video/slide/${file}`}
                  className="h-auto w-[500px] object-cover"
                  muted
                  playsInline
                />
                <div className="absolute ml-4 bottom-4 items-start flex gap-2">
                  <button
                    onClick={togglePlay}
                    className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
                  >
                    {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
                  >
                    {isMuted ? (
                      <FaVolumeMute size={18} />
                    ) : (
                      <FaVolumeUp size={18} />
                    )}
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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

export default Portofolio;
