import React from "react";

const RiwayatUlasan = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-[#4E2C83] pb-6">
        {/* Gambar Produk */}
        <div className="flex-shrink-0 w-24 h-32 items-center justify-center border rounded-lg overflow-hidden">
          <img
            src="/produk/kiosk.png" // Ganti sesuai path gambar
            alt="Produk"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Informasi Produk dan Ulasan */}
        <div className="flex-1">
          <div className="flex justify-between items-start flex-col md:flex-row">
            <div>
              <p className="text-sm text-gray-400 mb-1">Hari Ini</p>
              <h4 className="text-md font-semibold text-black leading-tight">
                DIGITAL SIGNAGE <br /> WINDOWS TOUCHSCREEN
              </h4>
            </div>
            <button className="mt-3 md:mt-0 bg-[#4E2C83] text-white px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#4E2C83] border-1 border-[#4E2C83] transition">
              Lihat Ulasan
            </button>
          </div>

          {/* Isi Ulasan */}
          <div className="mt-4">
            <h5 className="text-lg font-semibold text-black mb-1">Produk Bagus</h5>
            <p className="text-sm text-gray-600">
              Produk standing kiosk ini benar-benar memenuhi ekspektasi. Desainnya elegan dan modern, sangat cocok ditempatkan di area publik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatUlasan;
