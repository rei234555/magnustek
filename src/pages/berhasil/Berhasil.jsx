import React from "react";

const StatusKiosk = () => {
  return (
    <section className="min-h-screen flex flex-col bg-[#F8F9FB]">
      <section className="flex-1 flex items-start mt-10 justify-start">
        <div className="w-full max-w-7xl mx-auto p-4">
          <div className="bg-white rounded-xl shadow border border-gray-200">
            <div className="px-6 pt-4 pb-2 border-b border-gray-100">
              <span className="text-gray-700 font-semibold text-base">
                Status Pembayaran
              </span>
            </div>
            <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-4">
              {/* Kiri: Icon dan info */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#1DD17E" />
                    <path
                      d="M8 12l2.5 2.5L16 9"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-black">
                    DIGITAL SIGNAGE WINDOWS TOUCHSCREEN
                  </div>
                  <div className="text-xs text-gray-500">12 Jun 2025</div>
                </div>
              </div>
              {/* Kanan: Pembayaran berhasil */}
              <div className="flex items-center gap-1 text-xs text-green-600 md:ml-auto font-semibold">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#22C55E"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12l2.5 2.5L16 9"
                    stroke="#22C55E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Pembayaran berhasil dilakukan.</span>
              </div>
            </section>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 pb-4">
              <div className="flex items-center gap-20">
                {/* Metode Pembayaran & Nomor Rekening dihapus */}
              </div>
              <div>
                <div className="text-xs text-gray-500">Total Pembayaran</div>
                <div className="font-bold text-black text-lg">
                  Rp 28.377.128
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 px-6 pb-4">
              <button
                className="border border-[#F46F22] text-[#F46F22] font-semibold rounded-lg px-8 py-2 transition hover:bg-[#F46F22] hover:text-white"
                onClick={() => (window.location.href = "/produk/all")}
              >
                Jelajahi Produk
              </button>
              <button
                className="border bg-[#F46F22] text-white font-semibold rounded-lg px-8 py-2 transition hover:border-[#F46F22] hover:bg-white hover:text-[#F46F22]"
                onClick={() => (window.location.href = "/profile")}
              >
                Lihat History Pembelian
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default StatusKiosk;