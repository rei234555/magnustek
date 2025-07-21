import React from "react";

const RiwayatPembelian = () => {
  const orders = [
    {
      status: "Dalam Proses Pembelian",
      date: "10 Mei 2025",
      product: "DIGITAL SIGNAGE WINDOWS TOUCHSCREEN",
      qty: 1,
      price: 28177128,
      total: 28377128,
      statusText: "Proses Pengiriman",
      actions: ["Batalkan Pesanan", "Hubungi Penjual"],
      image: "/produk/kiosk.png",
    },
    {
      status: "Produk Selesai dibeli",
      date: "10 Mei 2025",
      product: "P1.2 INDOOR LED",
      qty: 2,
      price: 81585000,
      total: 82085000,
      statusText: "Selesai",
      actions: ["Beli Lagi", "Hubungi Penjual", "Beri Ulasan Produk"],
      image: "/produk/LED-Indoor/P1.2.png",
    },
    {
      date: "10 Mei 2025",
      product: "DIGITAL SIGNAGE WINDOWS TOUCHSCREEN",
      qty: 1,
      price: 28177128,
      total: 28377128,
      statusText: "Selesai",
      actions: ["Beli Lagi", "Hubungi Penjual", "Beri Ulasan Produk"],
      image: "/produk/kiosk.png",
    },
  ];

  return (
    <div className="space-y-10">
      {orders.map((order, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-lg mb-2">{order.status}</h3>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={order.image}
                  alt={order.product}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <p className="text-sm text-gray-500">{order.date}</p>
                  <p className="font-medium uppercase text-sm">
                    {order.product}
                  </p>
                  <p className="text-gray-600 text-sm">x{order.qty}</p>
                </div>
              </div>
              <div className="text-right text-orange-500 font-bold text-sm">
                Rp {order.price.toLocaleString("id-ID")}
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
              {/* Status on the left */}
              <div className="flex items-center gap-2 md:mr-auto">
                <p className="text-sm text-gray-400">
                  {idx === 0 ? "Menunggu Pembayaran" : order.statusText}
                </p>
                {idx === 0 && (
                  <a
                    href="/status/status-kiosk"
                    className="text-black text-sm font-normal underline hover:text-[#19b86b] ml-2"
                  >
                    Cek Status Pembayaran
                  </a>
                )}
              </div>

              {/* Buttons in the middle with increased gap */}
              <div className="flex gap-5 flex-wrap justify-end">
                {order.actions.map((act, i) => (
                  <button
                    key={i}
                    className={`px-4 py-1 rounded-full text-sm border ${
                      i === 0
                        ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-600"
                        : "text-gray-500 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {act}
                  </button>
                ))}
              </div>

              {/* Total on the right */}
              <div className="text-right mt-2 md:mt-0 text-sm md:ml-5">
                <p className="text-gray-500">Total Pesanan:</p>
                <p className="text-orange-500 font-semibold">
                  Rp {order.total.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiwayatPembelian;
