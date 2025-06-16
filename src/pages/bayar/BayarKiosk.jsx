import React, { useEffect, useState } from "react";

const BayarKiosk = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 jam = 3600 detik
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("mobile");

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(1, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h} : ${m} : ${s}`;
  };

  return (
    <section className="max-w-2xl mx-auto p-4">
      {/* Box Info Pembayaran */}
      <section className="border-2 border-[#F46F22] rounded-xl p-0 shadow text-center relative mb-8 overflow-hidden">
        {/* Gambar jam di atas, tanpa border/rounded */}
        <div className="flex justify-center pt-6 pb-2 bg-white">
          <img src="/15.png" alt="Jam" className="w-28 h-28 object-contain" />
          {/* Ganti src sesuai gambar yang diinginkan */}
        </div>
        <div className="px-8 pb-8 pt-0">
          <div className="text-sm mt-2 mb-1 text-[#444]">
            Lakukan pembayaran sebelum:{" "}
            <span className="font-medium">25 Mei 2025, 14.00 WIB</span>
          </div>
          <div className="flex justify-center gap-2 mb-4 mt-2">
            {formatTime(timeLeft)
              .split(":")
              .map((val, idx) => (
                <span
                  key={idx}
                  className="bg-[#EDEDED] text-[#444] font-bold text-lg px-4 py-1 rounded-md tracking-widest border border-gray-300"
                >
                  {val.trim()}
                </span>
              ))}
          </div>
          <div className="border-t border-[#C7BEE6] my-4" />
          <div className="flex justify-between items-center mb-2">
            <div className="text-left">
              <div className="text-xs text-gray-600">Nomor Rekening</div>
              <div className="text-lg font-bold tracking-wide">5060234509</div>
            </div>
            <img src="/BCA.png" alt="BCA" className="h-20" />
          </div>
          <div className="text-xs text-gray-600 mt-2 mb-1 text-left">
            Total Tagihan
          </div>
          <div className="text-xl font-semibold text-left mb-2">
            Rp 28.377.128
          </div>
          <div className="text-xs text-gray-400 italic border-t border-[#C7BEE6] pt-2 mb-4 text-left">
            *Penting: Transfer Virtual Account hanya bisa dilakukan dari bank
            yang sudah dipilih
          </div>
          <div className="flex gap-4 mt-2 justify-center">
            <button
              onClick={() => setShowDetailModal(true)}
              className="border border-[#1DD17E] text-[#1DD17E] px-6 py-2 rounded-lg hover:bg-[#1DD17E] hover:text-white transition font-medium"
            >
              Lihat Detail
            </button>
            <button
              onClick={() => (window.location.href = "/status/status-kiosk")}
              className="border border-[#1DD17E] text-[#1DD17E] px-6 py-2 rounded-lg hover:bg-[#1DD17E] hover:text-white transition font-medium"
            >
              Cek Status Pembayaran
            </button>
          </div>
        </div>
      </section>

      {/* Dropdown Cara Pembayaran */}
      <div className="border-2 border-[#F46F22] rounded-xl p-6">
        <h2 className="font-semibold text-lg mb-4">Cara Pembayaran</h2>

        {/* m-BCA */}
        <div>
          <button
            className="flex justify-between w-full py-2 font-medium"
            onClick={() =>
              setOpenDropdown(openDropdown === "mobile" ? "" : "mobile")
            }
          >
            <span>m-BCA (BCA mobile)</span>
            <span>{openDropdown === "mobile" ? "▲" : "▼"}</span>
          </button>
          {openDropdown === "mobile" && (
            <ol className="list-decimal ml-6 text-sm text-gray-700 mt-2">
              <li>Buka aplikasi BCA mobile, login ke m-BCA.</li>
              <li>Pilih m-Transfer → Transfer Antar Rekening.</li>
              <li>Masukkan nomor rekening (5060234509).</li>
              <li>Masukkan nominal dan berita (opsional).</li>
              <li>Konfirmasi, lalu masukkan PIN.</li>
            </ol>
          )}
        </div>
        {/* ATM BCA */}
        <div>
          <button
            className="flex justify-between w-full py-2 font-medium"
            onClick={() => setOpenDropdown(openDropdown === "atm" ? "" : "atm")}
          >
            <span>ATM BCA</span>
            <span>{openDropdown === "atm" ? "▲" : "▼"}</span>
          </button>
          {openDropdown === "atm" && (
            <ol className="list-decimal ml-6 text-sm text-gray-700 mt-2">
              <li>Masukkan kartu ATM dan PIN Anda.</li>
              <li>
                Pilih menu Transaksi Lainnya &gt; Transfer &gt; ke Rekening BCA.
              </li>
              <li>Masukkan nomor rekening tujuan (5060234509).</li>
              <li>Masukkan nominal transfer.</li>
              <li>Ikuti instruksi hingga transaksi selesai.</li>
            </ol>
          )}
        </div>
        {/* KlikBCA */}
        <div>
          <button
            className="flex justify-between w-full py-2 font-medium"
            onClick={() =>
              setOpenDropdown(openDropdown === "klikbca" ? "" : "klikbca")
            }
          >
            <span>KlikBCA (Internet Banking)</span>
            <span>{openDropdown === "klikbca" ? "▲" : "▼"}</span>
          </button>
          {openDropdown === "klikbca" && (
            <ol className="list-decimal ml-6 text-sm text-gray-700 mt-2">
              <li>
                Login ke KlikBCA di{" "}
                <a
                  href="https://ibank.klikbca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  ibank.klikbca.com
                </a>
              </li>
              <li>Pilih menu Transfer Dana &gt; Transfer ke Rekening BCA.</li>
              <li>Masukkan nomor rekening tujuan (5060234509).</li>
              <li>Masukkan nominal transfer.</li>
              <li>Ikuti instruksi hingga transaksi selesai.</li>
            </ol>
          )}
        </div>
      </div>

      {/* Modal: Detail Pembayaran */}
      {showDetailModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold"
              onClick={() => setShowDetailModal(false)}
            >
              &times;
            </button>
            <h3 className="font-semibold text-lg mb-4">Detail Pembayaran</h3>
            <div className="text-sm text-gray-700">
              <p className="flex justify-between">
                <span>Total Harga (1 Barang)</span>
                <span className="text-gray-400">Rp 28.177.128</span>
              </p>
              <p className="flex justify-between">
                <span>Total Ongkos Pengiriman</span>
                <span>Rp 200.000</span>
              </p>
              <hr className="my-2" />
              <p className="flex justify-between font-semibold">
                <span>Total Bayar</span>
                <span>Rp 28.377.128</span>
              </p>
              <hr className="my-2" />
              <p>Metode Pembayaran: BANK BCA</p>
              <p className="mt-2 font-medium">Barang yang dibeli:</p>
              <p className="text-gray-600">
                DIGITAL SIGNAGE WINDOWS TOUCHSCREEN
              </p>
              <p className="mt-2 font-medium">Alamat Pengiriman:</p>
              <p className="text-gray-500 text-sm">
                Jl. Raya Menganti Babatan, Babatan, Kec. Wiyung, Surabaya, Jawa
                Timur 60227
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BayarKiosk;
