import React from "react";

const StatusKiosk = () => {
  return (
    <section className="min-h-screen flex flex-col bg-[#F8F9FB]">
      <section className="flex-1 flex items-start mt-10 justify-start">
        <div className="w-full max-w-7xl mx-auto p-4">
          <div className="bg-white rounded-xl shadow border border-gray-200">
            <div className="px-6 pt-4 pb-2 border-b border-gray-100">
              <span className="text-gray-700 font-semibold text-base">
                Menunggu Pembayaran
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
              {/* Kanan: Batas waktu */}
              <div className="flex items-center gap-1 text-xs text-gray-500 md:ml-auto">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#F46F22"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 7v5l3 3"
                    stroke="#F46F22"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Bayar sebelum</span>
                <span className="text-[#F46F22] font-semibold ml-1">
                  12 Jun, 10:35 WIB
                </span>
              </div>
            </section>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 pb-4">
              <div className="flex items-center gap-20">
                {/* Metode Pembayaran */}
                <div className="flex items-center gap-3">
                  <img src="/BCA.png" alt="BCA" className="h-8 w-auto" />
                  <div>
                    <div className="text-xs text-gray-500">
                      Metode Pembayaran
                    </div>
                    <div className="font-bold text-black">BCA</div>
                  </div>
                </div>
                {/* Nomor Rekening dengan icon salin */}
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-xs text-gray-500">Nomor Rekening</div>
                    <div
                      className="font-bold text-black tracking-wide"
                      id="rekening"
                    >
                      5060234509
                    </div>
                  </div>
                  <button
                    type="button"
                    className="p-1 rounded hover:bg-gray-100"
                    title="Salin Nomor Rekening"
                    onClick={() => {
                      navigator.clipboard.writeText("5060234509");
                    }}
                  >
                    {/* Icon salin */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400 hover:text-[#1DD17E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="3"
                        y="3"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Total Pembayaran</div>
                <div className="font-bold text-black text-lg">
                  Rp 28.377.128
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 px-6 pb-4">
              <button className="border border-green-500 text-green-500 font-semibold rounded-lg px-8 py-2 transition hover:bg-green-500 hover:text-white">
                Lihat Detail
              </button>
              <button
                className="bg-green-500 text-white font-semibold rounded-lg px-8 py-2 transition hover:bg-[#19b86b]"
                onClick={() => (window.location.href = "/bayar/bayar-kiosk")}
              >
                Cara Pembayaran
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default StatusKiosk;
