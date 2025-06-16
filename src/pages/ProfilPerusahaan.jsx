import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const position = [-7.2533012, 112.6195568];
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Komponen animasi angka
const AnimatedNumber = ({ value, duration = 1200 }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || hasAnimated) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        let start = 0;
        const startTime = performance.now();
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setDisplay(Math.floor(progress * value));
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplay(value);
            setHasAnimated(true);
          }
        };
        requestAnimationFrame(animate);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [value, duration, hasAnimated]);

  return <span ref={ref}>{display}</span>;
};

const ProfilPerusahaan = () => {
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

      {/* Company Overview */}
      <section className="mt-20 py-12 px-4 md:px-10 flex justify-center">
        <div className="w-full max-w-11/12">
          <h2 className="text-center text-4xl font-bold text-[#F46F22] mb-8">
            Company Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6  text-left text-base">
            {/* Box 1 */}
            <div className="border border-[#F46F22] rounded-lg p-6 text-[#F46F22] text-xl bg-white">
              Kami berasal dari perusahaan kecil yang bertekad untuk memberikan
              proyek terbaik.
            </div>
            {/* Box 2 (tengah, orange) */}
            <div className="rounded-lg p-6 bg-[#F46F22] text-white text-xl font-medium">
              Dengan semangat dan kemampuan yang kami miliki, semua proyek yang
              kami kerjakan dikerjakan dengan sepenuh hati dan selalu
              mempertimbangkan kebutuhan dan pendapat klien.
            </div>
            {/* Box 3 */}
            <div className="border border-[#F46F22] rounded-lg p-6 text-[#F46F22] text-xl bg-white">
              Tepercaya dalam menyediakan peralatan multimedia TKDN untuk semua
              kebutuhan visual Anda mulai dari videotron LED indoor dan outdoor,
              smartboard, signage, hingga PC portabel dan kamera PTZ all in one.
            </div>
          </div>
        </div>
      </section>

      {/* Stat Boxes */}
      <section className="flex justify-center mt-10">
        <div className="grid md:grid-cols-3 gap-10 text-center w-full max-w-11/12">
          <div className="bg-[#F46F22] rounded-lg px-6 py-6 text-white shadow font-bold flex flex-col items-center">
            <h3 className="text-2xl md:text-2xl font-bold mb-1">
              <AnimatedNumber value={500} duration={1200} />+ Produk Terjual
            </h3>
            <p className="text-base font-normal">
              Produk tersebar di berbagai daerah.
            </p>
          </div>
          <div className="bg-[#F46F22] rounded-lg px-6 py-6 text-white shadow font-bold flex flex-col items-center">
            <h3 className="text-2xl md:text-2xl font-bold mb-1">
              <AnimatedNumber value={100} duration={1200} />+ Klien Puas
            </h3>
            <p className="text-base font-normal">
              Dipercaya oleh banyak klien.
            </p>
          </div>
          <div className="bg-[#F46F22] rounded-lg px-6 py-6 text-white shadow font-bold flex flex-col items-center">
            <h3 className="text-2xl md:text-2xl font-bold mb-1">
              <AnimatedNumber value={150} duration={1200} />+ Proyek Selesai
            </h3>
            <p className="text-base font-normal">
              Menjangkau hingga skala nasional.
            </p>
          </div>
        </div>
      </section>

      {/* Happy Clients */}
      <section className="w-full text-white py-0 px-0 flex justify-center items-center mt-20">
        <img
          src="/klien.png"
          alt="Our Happy Clients"
          className="max-w-11/12 w-full h-auto object-contain"
          style={{ display: "block" }}
        />
      </section>

      {/* Hubungi Kami */}
      <section className="py-12 px-4 md:px-10 flex justify-center mt-20">
        <div className="bg-white shadow-md rounded-xl border border-gray-400 p-6 md:flex gap-8 items-start w-full max-w-11/12">
          {/* Info Kontak */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold mb-2">Hubungi Kami</h3>
            <div>
              <span className="text-[#F46F22] font-bold">Email:</span>
              <div className="text-black">magnustekofficial@gmail.com</div>
            </div>
            <div>
              <span className="text-[#F46F22] font-bold">No. Telepon:</span>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="https://wa.me/6285156949282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md font-medium w-fit"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="inline"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M10.003 1.667c-4.6 0-8.333 3.733-8.333 8.333 0 1.47.385 2.89 1.116 4.13L1.667 18.333l4.309-1.13c1.2.66 2.56 1.127 4.027 1.127 4.6 0 8.333-3.733 8.333-8.333s-3.733-8.333-8.333-8.333zm0 15.3c-1.34 0-2.66-.36-3.8-1.04l-.272-.162-2.557.67.683-2.49-.177-.255c-.7-1.01-1.073-2.19-1.073-3.413 0-3.583 2.917-6.5 6.5-6.5s6.5 2.917 6.5 6.5-2.917 6.5-6.5 6.5z" />
                  </svg>
                  +62-851-5694-9282 (Fonda)
                </a>
                <a
                  href="https://wa.me/6287815555644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md font-medium w-fit"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="inline"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M10.003 1.667c-4.6 0-8.333 3.733-8.333 8.333 0 1.47.385 2.89 1.116 4.13L1.667 18.333l4.309-1.13c1.2.66 2.56 1.127 4.027 1.127 4.6 0 8.333-3.733 8.333-8.333s-3.733-8.333-8.333-8.333zm0 15.3c-1.34 0-2.66-.36-3.8-1.04l-.272-.162-2.557.67.683-2.49-.177-.255c-.7-1.01-1.073-2.19-1.073-3.413 0-3.583 2.917-6.5 6.5-6.5s6.5 2.917 6.5 6.5-2.917 6.5-6.5 6.5z" />
                  </svg>
                  +62-878-1555-5644 (Deddy)
                </a>
              </div>
            </div>
            <div>
              <span className="text-[#F46F22] font-bold">Alamat Kantor:</span>
              <div className="text-black max-w-2xl">
                Northwest Boulevard NV7 No.66, Pakal, Kec. Pakal,
                <br />
                Surabaya, Jawa Timur 60197
              </div>
            </div>
            <div>
              <span className="text-[#F46F22] font-bold">Ikuti Kami:</span>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://instagram.com/magnustekofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F46F22] text-2xl"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/magnustekofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F46F22] text-2xl"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 2.1H7A4.9 4.9 0 0 0 2.1 7v10A4.9 4.9 0 0 0 7 21.9h5.1v-7.1H9.7v-2.3h2.4v-1.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.2h-1.1c-1.1 0-1.4.5-1.4 1.3v1.8h2.8l-.4 2.3h-2.4V21.9H17A4.9 4.9 0 0 0 21.9 17V7A4.9 4.9 0 0 0 17 2.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:pr-0 pr-[-24px]">
            <div
              className="rounded-xl overflow-hidden border border-gray-400"
              style={{
                width: 600,
                height: 400,
                minWidth: 600,
                marginRight: 0,
                marginLeft: "auto",
              }}
            >
              <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
                dragging={true}
                doubleClickZoom={true}
                attributionControl={false}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={position}
                  icon={markerIcon}
                  eventHandlers={{
                    click: () => {
                      window.open(
                        "https://www.google.com/maps/place/Magnustek+Official/@-7.2533012,112.6180015,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7ff05c5ed802b:0xd3b56e14d3845d3f!8m2!3d-7.2533012!4d112.6195568!16s%2Fg%2F11vzgks4z1?entry=ttu",
                        "_blank"
                      );
                    },
                  }}
                >
                  <Popup>
                    Magnustek Official
                    <br />
                    Northwest Boulevard N7 No.66, Surabaya
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
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

export default ProfilPerusahaan;
