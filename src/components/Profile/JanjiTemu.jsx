import React from "react";

const janjiTemuData = [
  {
    id: 1,
    produk: "DIGITAL SIGNAGE WINDOWS TOUCHSCREEN",
    tanggal: "15 Juni 2025",
    jam: "10.00",
    status: "Disetujui",
  },
  {
    id: 2,
    produk: "P1.2 INDOOR LED",
    tanggal: "16 Juni 2025",
    jam: "13.00",
    status: "Dibatalkan",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Disetujui":
      return "text-green-600 bg-green-100";
    case "Dibatalkan":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const JanjiTemu = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Riwayat Janji Temu</h2>
      {janjiTemuData.length > 0 ? (
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <th className="py-2">No</th>
              <th className="py-2">Nama Produk</th>
              <th className="py-2">Tanggal</th>
              <th className="py-2">Jam</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {janjiTemuData.map((item, index) => (
              <tr key={item.id} className="text-sm border-b hover:bg-gray-50">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.produk}</td>
                <td className="py-2">{item.tanggal}</td>
                <td className="py-2">{item.jam}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Belum ada riwayat janji temu.</p>
      )}
    </div>
  );
};

export default JanjiTemu;
