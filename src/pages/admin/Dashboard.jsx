import { ShoppingCart, Package, Users, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const pesananBaru = [
    {
      id: 1,
      namaProduk: "P1.5 INDOOR LED",
      image: "/produk/LED-Indoor/P1.5.png",
      jumlah: 2,
      alamat: "Jl. Melati No.10, Jakarta Selatan",
      status: "Perlu Dikirim",
    },
  ];

  const janjiTemu = [
    {
      id: 1,
      namaCustomer: "Rei Saputra",
      email: "re@gmail.com",
      produk: "Digital Signage Windows Touchscreen",
      tanggal: "15 Juni 2025",
      jam: "10.00",
    },
  ];

  return (
    <main className="flex-1 bg-gray-50 p-6">
      {/* Heading Selamat Datang */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Selamat Datang Kembali, Admin!
      </h1>

      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
        <div className="bg-[#F46F22] text-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">2</h2>
              <p className="text-lg font-semibold">Pesanan Masuk</p>
              <p className="text-sm">
                Terdapat pesanan baru yang menunggu untuk dikirim.
              </p>
              <button
                onClick={() => navigate("/admin/pesanan")}
                className="mt-3 bg-white text-[#F46F22] font-semibold px-4 py-2 rounded shadow hover:bg-orange-100 transition"
              >
                Lihat Pesanan
              </button>
            </div>
            <ShoppingCart size={32} />
          </div>
        </div>
        <div className="bg-[#4E2C83] text-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">18</h2>
              <p className="text-lg font-semibold">Manajemen Produk</p>
              <p className="text-sm">
                Perbarui informasi produk, stok, dan harga secara berkala.
              </p>
              <button
                onClick={() => navigate("/admin/kelola")}
                className="mt-3 bg-white text-[#4E2C83] font-semibold px-4 py-2 rounded shadow hover:bg-purple-100 transition"
              >
                Kelola Produk
              </button>
            </div>
            <Package size={32} />
          </div>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">6</h2>
              <p className="text-lg font-semibold">Kelola Mitra</p>
              <p className="text-sm">
                Kelola dan pantau kerja sama dengan mitra terpercaya.
              </p>
              <button
                onClick={() => navigate("/admin/mitra")}
                className="mt-3 bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-blue-100 transition"
              >
                Lihat Mitra
              </button>
            </div>
            <Users size={32} />
          </div>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">2</h2>
              <p className="text-lg font-semibold">Janji Temu</p>
              <p className="text-sm">
                Terdapat janji temu baru yang menunggu untuk dikonfirmasi.
              </p>
              <button
                onClick={() => navigate("/admin/janji-temu")}
                className="mt-3 bg-white text-green-600 font-semibold px-4 py-2 rounded shadow hover:bg-green-100 transition"
              >
                Lihat Janji Temu
              </button>
            </div>
            <ClipboardList size={32} />
          </div>
        </div>
      </div>

      {/* Pesanan Terbaru */}
      <section className="p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Pesanan Terbaru
        </h2>
        {pesananBaru.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.namaProduk}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.namaProduk}</p>
                <p className="text-sm text-gray-600">
                  Jumlah: {item.jumlah} • {item.status}
                </p>
                <p className="text-sm text-gray-500">{item.alamat}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Janji Temu yang Belum Dikonfirmasi */}
      <section className=" p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Janji Temu Belum Dikonfirmasi
        </h2>
        {janjiTemu.map((item) => (
          <div key={item.id} className="border-b border-gray-300 py-4">
            <p className="font-semibold text-gray-800">
              {item.namaCustomer} ({item.email})
            </p>
            <p className="text-sm text-gray-600">Produk: {item.produk}</p>
            <p className="text-sm text-gray-600">
              Tanggal: {item.tanggal} • Jam: {item.jam}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
