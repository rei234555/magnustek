import React, { useState } from "react";

const KelolaProduk = () => {
  const [products, setProducts] = useState([
    {
      title: "P1.2 INDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "LED Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 94.320.000",
      image: "/produk/LED-Indoor/P1.2.png",
      stock: 50,
    },
    {
      title: "DIGITAL SIGNAGE WINDOWS TOUCHSCREEN",
      categoryUtama: "Smart Digital",
      subKategori: "Standing Kiosk",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 94.320.000",
      image: "/produk/kiosk.png",
      stock: 50,
    },
    {
      title: "P2.5 INDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "LED Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 29.803.500",
      image: "/produk/LED-Indoor/P2.5.png",
      stock: "100",
    },
    {
      title: "P4 INDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "LED Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 26.307.000",
      image: "/produk/LED-Indoor/P4.png",
      stock: "100",
    },
    {
      title: "P1.8 INDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "LED Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 26.307.000",
      image: "/produk/LED-Indoor/P1.8.png",
      stock: "100",
    },
    {
      title: "P8 OUTDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "LED Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/P8.png",
      stock: "100",
    },
    {
      title: "P3.9 Hybrid LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Portable / Event Series",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 32.967.000",
      image: "/produk/hybrid/HYBRID.P3.png",
      stock: "100",
    },
    {
      title: "P2.6 Hybrid LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Portable / Event Series",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 32.967.000",
      image: "/produk/hybrid/HYBRID.P2.png",
      stock: "100",
    },
    {
      title: "MAGNUSTEK P2.5 LED Banner",
      categoryUtama: "LED Display Solutions",
      subKategori: "LED Banner",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 54.778.000",
      image: "/produk/banner/BANNER.P2.png",
      stock: "100",
    },
    {
      title: "MAGNUSTEK P1.8 LED Banner",
      categoryUtama: "LED Display Solutions",
      subKategori: "LED Banner",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 54.778.000",
      image: "/produk/banner/BANNER.P1.png",
      stock: "100",
    },
    {
      title: "P1.5 INDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/LED-Indoor/P1.5.png",
      stock: "100",
    },
    {
      title: "P1.2 COB INDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/LED-Indoor/cob1.png",
      stock: "100",
    },
    {
      title: "P0.9 COB INDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Led Videotron Indoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/LED-Indoor/cob2.png",
      stock: "100",
    },
    {
      title: "P2.5 OUTDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p2.5outdoor.png",
      stock: "100",
    },
    {
      title: "P2 OUTDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p2outdoor.png",
      stock: "100",
    },
    {
      title: "P4 OUTDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p4outdoor.png",
      stock: "100",
    },
    {
      title: "P5 OUTDOOR LED",
      categoryUtama: "LED Display Solutions",
      subKategori: "Led Videotron Outdoor",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 41.070.000",
      image: "/produk/LED-Outdoor/p5outdoor.png",
      stock: "100",
    },
    {
      title: "WALL / VIDEOWALL DISPLAY",
      categoryUtama: "Commercial Display",
      subKategori: "TV Wall",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 67.200.000",
      image: "/produk/TV-WALL.png",
      stock: "100",
    },
    {
      title: "MAGNUSTEK ALL IN ONE SCREEN",
      categoryUtama: "Commercial Display",
      subKategori: "All In One Screen",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/ALL-IN-ONE.png",
      stock: "100",
    },
    {
      title: "SMARTBOARD TOUCH SCREEN",
      categoryUtama: "Collaboration System",
      subKategori: "Interactive Smartboard",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/smartboard.png",
      stock: "100",
    },
    {
      title: "PTZ Camera HD 20x ZOOM",
      categoryUtama: "Collaboration System",
      subKategori: "Conference System",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/ptz.png",
      stock: "100",
    },
    {
      title: "MAGNUSTEK VEGA",
      categoryUtama: "Collaboration System",
      subKategori: "Conference System",
      rating: "★★★★★",
      banyak: "(1)",
      price: "Rp 56.400.000",
      image: "/produk/vega.png",
      stock: "100",
    },
  ]);

  const [page, setPage] = useState(1);
  const perPage = 7;

  // Pagination logic
  const totalPage = Math.ceil(products.length / perPage);
  const paginatedProducts = products.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus produk ini?");
    if (confirmDelete) {
      const updated = [...products];
      updated.splice((page - 1) * perPage + index, 1);
      setProducts(updated);
      // Jika produk di halaman terakhir habis, kembali ke halaman sebelumnya
      if ((page - 1) * perPage >= updated.length && page > 1) {
        setPage(page - 1);
      }
    }
  };

  const handleEdit = (index) => {
    alert(`Fitur edit produk [${products[index].title}] (dummy)`);
  };

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Kelola Produk</h2>
        <button className="bg-[#F46F22] text-white px-4 py-2 rounded hover:bg-white hover:text-[#F46F22] border border-[#F46F22] transition">
          Tambah Produk
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 table-fixed">
          <colgroup>
            <col style={{ width: "4%" }} /> {/* No */}
            <col style={{ width: "8%" }} /> {/* Gambar */}
            <col style={{ width: "22%" }} /> {/* Nama Produk */}
            <col style={{ width: "16%" }} /> {/* Kategori Utama */}
            <col style={{ width: "16%" }} /> {/* Sub Kategori */}
            <col style={{ width: "12%" }} /> {/* Harga */}
            <col style={{ width: "8%" }} /> {/* Stok */}
            <col style={{ width: "14%" }} /> {/* Aksi */}
          </colgroup>
          <thead className="border-b border-gray-300 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Gambar</th>
              <th className="px-4 py-3">Nama Produk</th>
              <th className="px-4 py-3">Kategori Utama</th>
              <th className="px-4 py-3">Sub Kategori</th>
              <th className="px-4 py-3">Harga</th>
              <th className="px-4 py-3">Stok</th>
              <th className="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-200 transition duration-200"
              >
                <td className="px-4 py-3">
                  {(page - 1) * perPage + index + 1}
                </td>
                <td className="px-4 py-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-10 w-10 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3">{item.title}</td>
                <td className="px-4 py-3 text-blue-700 font-medium">
                  {item.categoryUtama}
                </td>
                <td className="px-4 py-3 text-orange-500 font-medium">
                  {item.subKategori}
                </td>
                <td className="px-4 py-3">{item.price}</td>
                <td className="px-4 py-3">{item.stock}</td>
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
            {/* Tampilkan baris kosong agar tinggi tabel tetap */}
            {paginatedProducts.length < perPage &&
              Array.from({ length: perPage - paginatedProducts.length }).map(
                (_, i) => (
                  <tr key={`empty-${i}`}>
                    <td className="px-4 py-3">&nbsp;</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                )
              )}
            {products.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-400 py-6">
                  Tidak ada produk.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {products.length > perPage && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`px-3 py-1 rounded border ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            &lt;
          </button>
          {[...Array(totalPage)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                page === i + 1
                  ? "bg-[#4E2C83] text-white border-[#4E2C83]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
            className={`px-3 py-1 rounded border ${
              page === totalPage
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default KelolaProduk;
