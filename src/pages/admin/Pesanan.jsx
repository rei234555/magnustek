import React, { useState } from "react";

const TABS = [
  { label: "Perlu Dikirim", color: "border-purple-600 text-purple-600" },
  { label: "Proses Pengiriman", color: "border-yellow-500 text-yellow-500" },
  { label: "Selesai", color: "border-green-600 text-green-600" },
  { label: "Dibatalkan", color: "border-red-600 text-red-600" },
];

const initialOrders = [
  {
    id: 1,
    namaProduk: "P1.5 INDOOR LED",
    image: "/produk/LED-Indoor/P1.5.png",
    jumlah: 2,
    alamat: "Jl. Melati No.10, Jakarta Selatan",
    status: "Perlu Dikirim",
  },
  {
    id: 2,
    namaProduk: "All In One Screen",
    image: "/produk/ALL-IN-ONE.png",
    jumlah: 1,
    alamat: "Jl. Anggrek Raya No.5, Bandung",
    status: "Perlu Dikirim",
  },
];

const Pesanan = () => {
  const [activeTab, setActiveTab] = useState("Perlu Dikirim");
  const [orders, setOrders] = useState(initialOrders);

  const handleChangeStatus = (id, newStatus) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  const filteredOrders = orders.filter((o) => o.status === activeTab);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-black mb-5">Data Pesanan</h2>
      {/* Alert */}
      {activeTab === "Perlu Dikirim" && (
        <div className="border border-purple-400 bg-purple-50 text-purple-800 px-6 py-4 rounded-lg mb-4">
          <p className="font-semibold">
            ⚠️ {orders.filter((o) => o.status === "Perlu Dikirim").length}{" "}
            Pesanan Perlu Dikirim!
          </p>
          <p className="text-sm">
            Segera proses pengemasan dan pengiriman pesanan.
          </p>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b flex space-x-6 mb-4 text-sm font-medium">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            className={`pb-2 ${
              activeTab === tab.label
                ? `${tab.color} border-b-2`
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 border-b border-gray-300">
            <tr>
              <th className="p-2">No</th>
              <th className="p-2">Nama Produk</th>
              <th className="p-2">Banyak Barang</th>
              <th className="p-2">Alamat Pengiriman</th>
              <th className="p-2">Detail Transaksi</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={order.id} className="border-b border-gray-300">
                <td className="p-2">{index + 1}</td>
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={order.image}
                    alt={order.namaProduk}
                    className="w-10 h-10 object-cover mr-4"
                  />
                  {order.namaProduk}
                </td>
                <td className="p-2">{order.jumlah}</td>
                <td className="p-2">{order.alamat}</td>
                <td className="p-2 text-orange-500 underline cursor-pointer">
                  Lihat Detail
                </td>
                <td className="p-2">
                  {activeTab !== "Selesai" && (
                    <select
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                      value={order.status}
                      onChange={(e) =>
                        handleChangeStatus(order.id, e.target.value)
                      }
                    >
                      <option>Perlu Dikirim</option>
                      <option>Proses Pengiriman</option>
                      <option>Selesai</option>
                      <option>Dibatalkan</option>
                    </select>
                  )}
                  {activeTab === "Selesai" && (
                    <span className="text-green-600 font-medium">Selesai</span>
                  )}
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-6">
                  Tidak ada pesanan dalam status ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pesanan;
