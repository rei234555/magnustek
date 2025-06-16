import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Phone } from "lucide-react";

const JanjiKiosk = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const times = [
    "09.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
  ];

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const position = [-7.2533012, 112.6195568];

  const handleTimeSelect = (time) => setSelectedTime(time);
  const handleSubmit = () => {
    alert(
      `Janji Temu pada ${selectedDate.toDateString()} jam ${selectedTime} dikonfirmasi.`
    );
  };

  return (
    <div className="max-w-11/12 mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-20">
        <div>
          <h2 className="text-2xl font-bold mb-1">Buat Janji Temu</h2>
          <p className="text-base text-[#4E2C83]">
            Silahkan tentukan hari dan waktu untuk diskusi produk secara
            langsung
          </p>
        </div>
        <div className="flex items-center justify-start gap-4 border p-3 rounded-xl min-w-[40px]">
          <img
            src="/beli/kecilkiosk.png"
            alt="Produk"
            className="w-20 h-20 object-contain rounded-lg border"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm md:text-base">
                DIGITAL SIGNAGE WINDOWS TOUCHSCREEN
              </span>
              <span className="font-semibold text-[#4E2C83] text-base ml-2">
                Rp 28.177.128
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-2">1 Produk</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Janji Temu */}
        <div>
          <div className="border-2 border-[#4E2C83] rounded-md p-6">
            <h3 className="font-bold text-xl text-[#4E2C83] mb-6">
              Pilih Hari dan Jam
            </h3>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Kalender */}
              <div className="w-full lg:w-[340px] min-h-[340px]">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  className=" border text-xs"
                  tileClassName={({ date, view }) =>
                    view === "month" &&
                    date.toDateString() === selectedDate.toDateString()
                      ? "react-calendar__tile--active-custom"
                      : ""
                  }
                />
              </div>
              {/* Jam */}
              <div className="flex-1 grid grid-cols-3 gap-4 items-start">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`py-3 text-base font-semibold rounded-md border-2 transition
                      ${
                        selectedTime === time
                          ? "bg-[#4E2C83] text-white border-[#4E2C83]"
                          : "bg-white text-[#4E2C83] border-[#4E2C83] hover:bg-[#f3eaff]"
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
                <span className="col-span-3 text-xs text-gray-500 mt-2">
                  *Hari dan waktu yang dipilih juga memerlukan konfirmasi Admin
                </span>
              </div>
            </div>
          </div>
          {/* Tombol bawah */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-base"
              disabled={!selectedDate || !selectedTime}
            >
              Kirim Janji Temu
            </button>
            <button
              className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold text-base bg-white hover:bg-red-50"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Peta & Info */}
        <div>
          {/* Map */}
          <div
            className="rounded-xl overflow-hidden border-2 border-[#4E2C83] mb-4"
            style={{ height: 444 }}
          >
            <MapContainer
              center={position}
              zoom={16}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
              dragging={true}
              doubleClickZoom={true}
              attributionControl={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={position}
                icon={markerIcon}
                eventHandlers={{
                  click: () => {
                    window.open(
                      "https://www.google.com/maps/place/Magnustek+Official/@-7.2533012,112.6180015,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7ff05c5ed802b:0xd3b56e14d3845d3f!8m2!3d-7.2533012!4d112.6195568!16s%2Fg%2F11vzgks4z1?entry=ttu",
                      "_blank"
                    );
                  },
                }}
              >
                <Popup>
                  Magnustek Official
                  <br />
                  Northwest Boulevard N7 No.66, Surabaya
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          {/* Info */}
          <div className="pt-4">
            <h3 className="font-bold text-2xl mb-1">Magnustek Official</h3>
            <p className="mb-3 text-base font-medium">
              Northwest Boulevard NV7 No.66, Pakal, Kec. Pakal,
              <br />
              Surabaya, Jawa Timur 60197
            </p>
            <a
              href="https://wa.me/6285156949282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-green-400 rounded-lg text-green-600 font-semibold text-lg hover:bg-green-50 transition"
              style={{ fontWeight: 500, lineHeight: "1.2" }} // Tambahkan lineHeight agar ikon lebih sejajar
            >
              <span className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="mr-2"
                  style={{ display: "inline-block", verticalAlign: "middle" }} // Pastikan ikon rata tengah
                >
                  <path
                    fill="#25D366"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"
                  />
                  <path
                    fill="#25D366"
                    d="M10.003 1.667c-4.6 0-8.333 3.733-8.333 8.333 0 1.47.385 2.89 1.116 4.13L1.667 18.333l4.309-1.13c1.2.66 2.56 1.127 4.027 1.127 4.6 0 8.333-3.733 8.333-8.333s-3.733-8.333-8.333-8.333zm0 15.3c-1.34 0-2.66-.36-3.8-1.04l-.272-.162-2.557.67.683-2.49-.177-.255c-.7-1.01-1.073-2.19-1.073-3.413 0-3.583 2.917-6.5 6.5-6.5s6.5 2.917 6.5 6.5-2.917 6.5-6.5 6.5z"
                  />
                </svg>
              </span>
              +62-851-5694-9282 
            </a>
            <hr className="my-6 border-t-2 border-[#4E2C83]" />
            <div className="mb-2">
              <p className="font-semibold text-gray-500 text-lg mb-3">
                Jam Operasional
              </p>
              <div className="flex justify-between text-base font-semibold">
                <div>
                  <span className="font-bold">Senin – Jumat</span>
                  <br />
                  <span className="font-normal">09.00 – 17.00</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">Sabtu – Minggu</span>
                  <br />
                  <span className="text-black font-normal">Tutup</span>
                </div>
              </div>
            </div>
            <hr className="mt-6 border-t-2 border-[#4E2C83]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JanjiKiosk;
