import React, { useState } from "react";

const initialCategories = [
  { categoryUtama: "LED Display Solutions", subKategori: "LED Videotron Indoor" },
  { categoryUtama: "LED Display Solutions", subKategori: "LED Videotron Outdoor" },
  { categoryUtama: "LED Display Solutions", subKategori: "LED Banner" },
  { categoryUtama: "LED Display Solutions", subKategori: "Portable / Event Series" },
  { categoryUtama: "Commercial Display", subKategori: "TV Wall" },
  { categoryUtama: "Commercial Display", subKategori: "All In One Screen" },
  { categoryUtama: "Collaboration System", subKategori: "Interactive Smartboard" },
  { categoryUtama: "Collaboration System", subKategori: "Conference System" },
  { categoryUtama: "Smart Digital", subKategori: "Standing Kiosk" },
];

const TambahKategori = () => {
  const [categories, setCategories] = useState(initialCategories);

  const handleDelete = (index) => {
    if (window.confirm("Yakin ingin menghapus kategori ini?")) {
      const updated = [...categories];
      updated.splice(index, 1);
      setCategories(updated);
    }
  };

  const handleEdit = (index) => {
    alert(`Fitur edit kategori [${categories[index].subKategori}] (dummy)`);
  };

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Kategori Produk</h2>
        <button className="bg-[#4E2C83] text-white px-4 py-2 rounded hover:bg-white hover:text-[#4E2C83] border border-[#4E2C83] transition">
          Tambah Kategori
        </button>
      </div>
      <div className="p-2">
        <table className="w-full text-sm text-left text-gray-700 table-fixed">
          <colgroup>
            <col style={{ width: "5%" }} />   {/* No */}
            <col style={{ width: "30%" }} />  {/* Kategori Utama */}
            <col style={{ width: "35%" }} />  {/* Sub Kategori */}
            <col style={{ width: "30%" }} />  {/* Aksi */}
          </colgroup>
          <thead className="border-b border-gray-300 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Kategori Utama</th>
              <th className="px-4 py-3">Sub Kategori</th>
              <th className="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-100 transition duration-200"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 text-gray-700 font-medium">{item.categoryUtama}</td>
                <td className="px-4 py-3 text-orange-500 font-medium">{item.subKategori}</td>
                <td className="px-4 py-3 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-white hover:bg-red-200 text-red-500 text-xs px-3 py-1 rounded border border-red-400"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {/* Baris kosong agar tabel tidak bergerak */}
            {categories.length < 9 &&
              Array.from({ length: 9 - categories.length }).map((_, i) => (
                <tr key={`empty-${i}`}>
                  <td className="px-4 py-3">&nbsp;</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                </tr>
              ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-400 py-6">
                  Tidak ada kategori.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TambahKategori;