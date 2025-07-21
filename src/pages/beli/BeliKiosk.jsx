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

  const [showOpsiPengiriman, setShowOpsiPengiriman] = useState(false);

  const opsiPengirimanList = [
    {
      value: "reguler",
      label: "Reguler",
      estimasi: "Perkiraan produk diterima: 12–14 Mei",
      harga: 200000,
    },
    {
      value: "jne",
      label: "JNE Reguler",
      estimasi: "Perkiraan produk diterima: 11–13 Mei",
      harga: 250000,
    },
    {
      value: "jnt",
      label: "J&T Reguler",
      estimasi: "Perkiraan produk diterima: 11–13 Mei",
      harga: 250000,
    },
    {
      value: "jne-express",
      label: "JNE Express",
      estimasi: "Perkiraan produk diterima: 10 Mei",
      harga: 300000,
    },
  ];

  const metodePembayaranList = [
    { value: "bca", label: "BANK BCA" },
    { value: "mandiri", label: "BANK Mandiri" },
    { value: "bni", label: "BANK BNI" },
    { value: "bri", label: "BANK BRI" },
  ];

  const [showMetodePembayaran, setShowMetodePembayaran] = useState(false);

  const [showWarning, setShowWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isFormValid = () => {
    return (
      form.email &&
      form.namaDepan &&
      form.namaBelakang &&
      form.alamat &&
      form.tempat &&
      form.kota &&
      form.provinsi &&
      form.kodePos &&
      form.telepon &&
      form.opsiPengiriman &&
      form.metodePembayaran
    );
  };

  const handleBuatPesanan = () => {
    if (!isFormValid()) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/bayar/bayar-kiosk");
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      {showWarning && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white rounded-xl px-6 py-4 flex items-center gap-3 border-2 border-orange-400 shadow">
          {/* Ganti src di bawah dengan icon Anda */}
          <img src="/warning.png" alt="!" className="w-10 h-10" />
          <div>
            <p className="text-orange-500 font-semibold text-md">
              Lengkapi Formulir Pesanan
            </p>
            <p className="text-black text-sm">
              Isi semua data formulir pesanan dengan benar.
            </p>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white rounded-xl px-8 py-5 flex items-center gap-4 shadow border border-green-400">
          {/* Ganti svg di bawah dengan icon Anda */}
          <img src="/succes.png" alt="!" className="w-10 h-10" />
          <div>
            <p className="text-green-600 font-semibold text-lg mb-1">
              Pesanan Berhasil Dibuat!
            </p>
            <p className="text-black text-sm">
              Selesaikan pembayaran Anda sebelum waktu habis
            </p>
          </div>
        </div>
      )}

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
              <span className="text-gray-500">
                {form.opsiPengiriman
                  ? `Rp ${opsiPengirimanList
                      .find((o) => o.value === form.opsiPengiriman)
                      ?.harga.toLocaleString("id-ID")}`
                  : "Opsi Pengiriman Belum Diisi"}
              </span>
            </div>
            <div className="flex justify-between font-semibold border-b py-4 pt-2">
              <span>Total</span>
              <span>
                {(() => {
                  const hargaBarang = 28177128;
                  const hargaPengiriman = form.opsiPengiriman
                    ? opsiPengirimanList.find(
                        (o) => o.value === form.opsiPengiriman
                      )?.harga || 0
                    : 0;
                  const total = hargaBarang + hargaPengiriman;
                  return `Rp ${total.toLocaleString("id-ID")}`;
                })()}
              </span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              className="border border-[#F46F22] text-[#F46F22] px-4 py-2 rounded-lg hover:bg-[#F46F22] hover:text-white"
              onClick={handleBuatPesanan}
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
                <option value="Surabaya">Surabaya</option>
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
                <option value="Jawa Timur">Jawa Timur</option>
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
            <div className="bg-gray-100 rounded-xl">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 font-semibold focus:outline-none"
                onClick={() => setShowOpsiPengiriman((prev) => !prev)}
              >
                <span>
                  {form.opsiPengiriman
                    ? opsiPengirimanList.find(
                        (o) => o.value === form.opsiPengiriman
                      )?.label
                    : "Pilih Opsi Pengiriman"}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    showOpsiPengiriman ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {showOpsiPengiriman && (
                <div className="divide-y divide-green-200 px-2 pb-2">
                  {opsiPengirimanList.map((opsi) => (
                    <label
                      key={opsi.value}
                      className={`flex items-center justify-between py-3 cursor-pointer px-2 ${
                        form.opsiPengiriman === opsi.value
                          ? "bg-white rounded-lg shadow border border-[#4E2C83]"
                          : ""
                      }`}
                    >
                      <div>
                        <input
                          type="radio"
                          name="opsiPengiriman"
                          value={opsi.value}
                          checked={form.opsiPengiriman === opsi.value}
                          onChange={(e) => {
                            handleChange(e);
                            setShowOpsiPengiriman(false);
                          }}
                          className="mr-3 accent-[#F46F22]"
                        />
                        <span className="font-medium">{opsi.label}</span>
                        <div className="text-xs text-gray-500">
                          {opsi.estimasi}
                        </div>
                      </div>
                      <div className="font-semibold text-right min-w-[100px]">
                        Rp {opsi.harga.toLocaleString("id-ID")}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Metode Pembayaran</h4>
            <div className="bg-gray-100 rounded-xl">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 font-semibold focus:outline-none"
                onClick={() => setShowMetodePembayaran((prev) => !prev)}
              >
                <span>
                  {form.metodePembayaran
                    ? metodePembayaranList.find(
                        (m) => m.value === form.metodePembayaran
                      )?.label
                    : "Pilih Metode Pembayaran"}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    showMetodePembayaran ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {showMetodePembayaran && (
                <div className="divide-y divide-blue-400 px-2 pb-2">
                  {metodePembayaranList.map((metode) => (
                    <label
                      key={metode.value}
                      className={`block py-3 px-4 cursor-pointer ${
                        form.metodePembayaran === metode.value
                          ? "bg-white font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setForm({ ...form, metodePembayaran: metode.value });
                        setShowMetodePembayaran(false);
                      }}
                    >
                      {metode.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeliKiosk;
