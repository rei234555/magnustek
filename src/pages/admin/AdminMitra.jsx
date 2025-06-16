import React, { useState } from "react";

const initialPartners = [
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

const AdminMitra = () => {
  const [partners, setPartners] = useState(initialPartners);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    location: "",
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleEdit = (index) => {
    const data = partners[index];
    setEditIndex(index);
    setEditData({
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      location: data.locations[0],
    });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    const updatedPartners = [...partners];
    updatedPartners[editIndex] = {
      ...updatedPartners[editIndex],
      name: editData.name,
      email: editData.email,
      whatsapp: editData.whatsapp,
      locations: [editData.location],
    };
    setPartners(updatedPartners);
    setShowEditModal(false);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    const updatedPartners = partners.filter((_, i) => i !== deleteIndex);
    setPartners(updatedPartners);
    setShowDeleteConfirm(false);
  };

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Data Mitra</h1>
        <button className="bg-[#5D2E8C] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#4E2C83]">
          Tambah Mitra
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Logo</th>
              <th className="px-4 py-3">Nama Mitra</th>
              <th className="px-4 py-3">Email Mitra</th>
              <th className="px-4 py-3">No. Telepon</th>
              <th className="px-4 py-3">Alamat Mitra</th>
              <th className="px-4 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((mitra, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">
                  <img
                    src={mitra.logo}
                    alt={mitra.name}
                    className="h-8 w-auto object-contain"
                  />
                </td>
                <td className="px-4 py-3">{mitra.name}</td>
                <td className="px-4 py-3">{mitra.email}</td>
                <td className="px-4 py-3">{mitra.whatsapp}</td>
                <td className="px-4 py-3">{mitra.locations[0]}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-100 text-yellow-700 border border-yellow-300 px-2 py-1 rounded hover:bg-yellow-200 text-xs"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-100 text-red-700 border border-red-300 px-2 py-1 rounded hover:bg-red-200 text-xs"
                      onClick={() => handleDelete(index)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Edit */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">Edit Mitra</h2>
            <div className="space-y-3">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Nama Mitra"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />
              <input
                type="email"
                className="w-full border px-3 py-2 rounded"
                placeholder="Email"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Nomor Telepon"
                value={editData.whatsapp}
                onChange={(e) =>
                  setEditData({ ...editData, whatsapp: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Alamat"
                value={editData.location}
                onChange={(e) =>
                  setEditData({ ...editData, location: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowEditModal(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-[#4E2C83] text-white rounded hover:bg-[#3f226b]"
                onClick={handleSaveEdit}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Konfirmasi Hapus */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md text-center">
            <p className="text-lg mb-4">Yakin ingin menghapus mitra ini?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMitra;
