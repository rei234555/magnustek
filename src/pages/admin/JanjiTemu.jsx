import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const dummyData = [
  {
    id: 1,
    email: "customer1@email.com",
    namaProduk: "DIGITAL SIGNAGE WINDOWS TOUCHSCREEN",
    image: "/produk/kiosk.png",
    tanggal: "15 Juni 2025",
    jam: "10.00",
  },
  {
    id: 2,
    email: "customer2@email.com",
    namaProduk: "P1.2 INDOOR LED",
    image: "/produk/LED-Indoor/P1.2.png",
    tanggal: "16 Juni 2025",
    jam: "13.00",
  },
];

const JanjiTemu = () => {
  const [selectedAction, setSelectedAction] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleActionChange = (id, action) => {
    setSelectedAction((prev) => ({ ...prev, [id]: action }));
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Konfirmasi Janji Temu</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-b border-gray-300 bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="text-left text-sm font-semibold border-b border-gray-300 text-gray-600 bg-gray-50">
              <th className="p-4">No</th>
              <th className="p-4">Email Customer</th>
              <th className="p-4">Nama Produk</th>
              <th className="p-4">Tanggal</th>
              <th className="p-4">Jam</th>
              <th className="p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr
                key={item.id}
                className="text-sm border-b border-gray-300 text-gray-700 bg-white"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.namaProduk}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="font-medium">{item.namaProduk}</span>
                  </div>
                </td>
                <td className="p-4">{item.tanggal}</td>
                <td className="p-4">{item.jam}</td>
                <td className="p-4">
                  <select
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                    value={selectedAction[item.id] || ""}
                    onChange={(e) =>
                      handleActionChange(item.id, e.target.value)
                    }
                  >
                    <option value="">Pilih</option>
                    <option value="Setuju">Setuju</option>
                    <option value="Batal">Batal</option>
                  </select>
                </td>
              </tr>
            ))}
            {dummyData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-6">
                  Tidak ada janji temu.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Notifikasi */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/40"></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-50 max-w-sm w-full relative">
            <div className="text-lg font-semibold mb-4">Konfirmasi</div>
            <div className="mb-4">Konfirmasi berhasil terkirim.</div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JanjiTemu;
