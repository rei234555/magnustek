import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RiwayatPembelian from "../components/Profile/RiwayatPembelian";
import RiwayatUlasan from "../components/Profile/RiwayatUlasan";
import JanjiTemu from "../components/Profile/JanjiTemu";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("pembelian");
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "Rei",
    lastName: "Saputra",
    username: "user",
    email: "re@gmail.com",
    birthDate: "",
    phone: "",
    gender: "",
    profileImage: null,
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userProfile"));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  const handleNavigateToEdit = (scrollTo) => {
    navigate("/edit-profile", { state: { scrollTo } });
  };

  return (
    <section className="max-w-6xl mx-auto p-4">
      {/* Section 1: Profil User */}
      <section className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-start justify-between relative">
        <div className="absolute top-20 right-6 flex gap-4">
          <button
            onClick={() => navigate("/edit-profile")}
            className="bg-[#F46F22] text-white px-6 py-2 rounded-lg shadow hover:bg-white hover:text-[#F46F22] transition"
          >
            Edit Profil
          </button>
          <button 
            onClick={() => navigate("/wishlist")}
          className="bg-[#4E2C83] text-white px-6 py-2 rounded-lg shadow hover:bg-white hover:text-[#4E2C83] transition">
            Wishlist
          </button>
        </div>

        <div className="flex items-center space-x-8 mt-16 w-full">
          <div className="flex flex-col items-center w-[300px]">
            {userData.profileImage ? (
              <img
                src={userData.profileImage}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-2 border-gray-200 mb-2"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-2 border-gray-200 flex items-center justify-center mb-2">
                <span className="text-5xl">👤</span>
              </div>
            )}
            <button
              onClick={() => handleNavigateToEdit("profileImage")}
              className="text-sm text-gray-600 hover:text-[#4E2C83]"
            >
              Pilih foto
            </button>
            <p className="text-xs text-center w-[200px] text-gray-500 mt-1">
              Besar file: maksimum 10 MB
              <br />
              Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {userData.firstName} {userData.lastName}
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500">Username</p>
                <p className="text-[#F46F22]">{userData.username}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="text-[#F46F22]">{userData.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Tanggal Lahir</p>
                <p
                  className={`${
                    userData.birthDate
                      ? "text-[#F46F22]"
                      : "text-gray-400 italic cursor-pointer hover:underline"
                  }`}
                  onClick={() =>
                    !userData.birthDate && handleNavigateToEdit("birthDate")
                  }
                >
                  {userData.birthDate || "*tambahkan tanggal lahir"}
                </p>
              </div>
              <div>
                <p className="text-gray-500">No. Telepon</p>
                <p
                  className={`${
                    userData.phone
                      ? "text-[#F46F22]"
                      : "text-gray-400 italic cursor-pointer hover:underline"
                  }`}
                  onClick={() =>
                    !userData.phone && handleNavigateToEdit("phone")
                  }
                >
                  {userData.phone || "*tambahkan no. telepon"}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Gender</p>
                <p
                  className={`${
                    userData.gender
                      ? "text-[#F46F22]"
                      : "text-gray-400 italic cursor-pointer hover:underline"
                  }`}
                  onClick={() =>
                    !userData.gender && handleNavigateToEdit("gender")
                  }
                >
                  {userData.gender || "*tambahkan gender"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tabs */}
      <div className="mt-8 border-b border-gray-300 flex justify-between text-center text-sm font-medium">
        {["pembelian", "ulasan", "janji"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 border-b-2 transition ${
              activeTab === tab
                ? "border-[#F46F22] text-[#F46F22]"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "pembelian"
              ? "Riwayat Pembelian Produk"
              : tab === "ulasan"
              ? "Riwayat Ulasan Produk"
              : "Janji Temu"}
          </button>
        ))}
      </div>

      {/* Section 3: Tab Content */}
      <div className="mt-6">
        {activeTab === "pembelian" && <RiwayatPembelian />}
        {activeTab === "ulasan" && <RiwayatUlasan />}
        {activeTab === "janji" && <JanjiTemu />}
      </div>
    </section>
  );
};

export default Profile;

