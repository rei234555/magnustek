import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BeliKiosk = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    namaDepan: "",
    namaBelakang: "",
    alamat: "",
    tempat: "",
    kota: "",
    provinsi: "",
    kodePos: "",
    telepon: "",
    opsiPengiriman: "",
    metodePembayaran: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Barang (1)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* KIRI - RINGKASAN BARANG */}
        <div className="p-4 space-y-4">
          <div className="flex gap-4">
            <div className="bg-white p-2 rounded-2xl border border-gray-300 flex items-center justify-center w-28 h-28">
              <img
                src="/beli/kecilkiosk.png"
                alt="Produk"
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm mb-4">
                DIGITAL SIGNAGE WINDOWS TOUCHSCREEN
              </h3>
              <p className="mb-2 text-sm">1 Produk</p>
              <p className="mb-2 text-xs text-gray-500">Stok Tersedia: 100</p>
              <p className="mb-2 font-semibold mt-2">Rp 28.177.128</p>
            </div>
          </div>

          <div className="pt-4 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Subtotal Produk</span>
              <span>Rp 28.177.128</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal Pengiriman</span>
              <span className="text-gray-500">Opsi Pengiriman Belum Diisi</span>
            </div>
            <div className="flex justify-between font-semibold border-b py-4 pt-2">
              <span>Total</span>
              <span>Rp 28.177.128</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              className="border border-[#F46F22] text-[#F46F22] px-4 py-2 rounded-lg hover:bg-[#F46F22] hover:text-white"
              onClick={() => navigate("/bayar/bayar-kiosk")}
            >
              Buat Pesanan
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              onClick={() => navigate("/janji/janji-kiosk")}
            >
              Buat Janji Temu
            </button>
          </div>
        </div>

        {/* KANAN - FORMULIR */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Kontak</h4>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan Email atau No. Telepon"
              className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <h4 className="font-semibold mb-2">Informasi Pengiriman</h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <input
                type="text"
                name="namaDepan"
                value={form.namaDepan}
                onChange={handleChange}
                placeholder="Masukkan Nama Depan"
                className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
              />
              <input
                type="text"
                name="namaBelakang"
                value={form.namaBelakang}
                onChange={handleChange}
                placeholder="Masukkan Nama Belakang"
                className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <input
              type="text"
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
              placeholder="Alamat lengkap pengiriman"
              className="w-full border rounded-lg px-3 py-2 text-sm mb-6"
            />
            <input
              type="text"
              name="tempat"
              value={form.tempat}
              onChange={handleChange}
              placeholder="Rumah, Kantor, Sekolahan"
              className="w-full border rounded-lg px-3 py-2 text-sm mb-6"
            />
            <div className="grid grid-cols-3 gap-3 mb-6">
              <select
                name="kota"
                value={form.kota}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
              >
                <option value="">Kota</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
              </select>
              <select
                name="provinsi"
                value={form.provinsi}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
              >
                <option value="">Provinsi</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="DKI Jakarta">DKI Jakarta</option>
              </select>
              <input
                type="text"
                name="kodePos"
                value={form.kodePos}
                onChange={handleChange}
                placeholder="Kode Pos"
                className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <input
              type="text"
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              placeholder="No. Telepon"
              className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <h4 className="font-semibold mb-2">Opsi Pengiriman</h4>
            <select
              name="opsiPengiriman"
              value={form.opsiPengiriman}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Pilih Opsi Pengiriman</option>
              <option value="kurir">Kurir</option>
              <option value="ambil">Ambil di Tempat</option>
            </select>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Metode Pembayaran</h4>
            <select
              name="metodePembayaran"
              value={form.metodePembayaran}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Pilih Metode Pembayaran</option>
              <option value="transfer">Transfer Bank</option>
              <option value="cod">Bayar di Tempat</option>
              <option value="qris">QRIS</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeliKiosk;
