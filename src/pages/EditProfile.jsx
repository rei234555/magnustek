import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "rei",
    lastName: "saputra",
    username: "user",
    email: "re@gmail.com",
    password: "12345678",
    birthDate: "",
    phone: "*tambahkan no. telepon",
    gender: "",
  });

  const [isChanged, setIsChanged] = useState(false);
  const [changedFields, setChangedFields] = useState({});
  const [photo, setPhoto] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const refs = {
    profileImage: useRef(null),
    birthDate: useRef(null),
    phone: useRef(null),
    gender: useRef(null),
  };

  useEffect(() => {
    // Scroll otomatis jika ada state.scrollTo
    if (location.state?.scrollTo) {
      const scrollKey = location.state.scrollTo;
      setTimeout(() => {
        refs[scrollKey]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      return updated;
    });

    setIsChanged(true);
    setChangedFields((prev) => ({
      ...prev,
      [name]: !["firstName", "lastName"].includes(name),
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const isValidType = ["image/jpeg", "image/png", "image/jpg"].includes(
        file.type
      );
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10 MB

      if (!isValidType) {
        alert("Format file tidak didukung.");
      } else if (!isValidSize) {
        alert("Ukuran file terlalu besar (maksimum 10 MB).");
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhoto(reader.result); // Simpan sebagai Data URL
          setIsChanged(true);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSave = () => {
    const dataToSave = { ...formData };
    if (photo) {
      dataToSave.profileImage = photo;
    }

    localStorage.setItem("userProfile", JSON.stringify(dataToSave));
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigate("/profile");
    }, 2000);
  };

  return (
    <section className="max-w-6xl mx-auto p-4">
      <section className="bg-white mb-20 mt-2 rounded-xl shadow-md border-1 border-[#F46F22] p-6 flex flex-col md:flex-row items-start justify-start relative">
        {/* Notifikasi */}
        {showNotification && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md">
            Data berhasil disimpan!
          </div>
        )}

        <div className="flex items-start space-x-8 mt-6 w-full">
          {/* Foto Profil */}
          <div
            className="flex flex-col items-center w-[300px]"
            ref={refs.profileImage}
          >
            <div className="w-32 h-32 rounded-full border-2 border-gray-200 flex items-center justify-center mb-2 overflow-hidden">
              {photo ? (
                <img
                  src={photo}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-5xl">👤</span>
              )}
            </div>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handlePhotoChange}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="text-sm text-gray-600 hover:text-purple-600 cursor-pointer"
            >
              Pilih foto
            </label>
            <p className="text-xs text-center w-[200px] text-gray-500 mt-1">
              Besar file: maksimum 10 MB
              <br />
              Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
            </p>
          </div>

          {/* Form */}
          <div className="flex-1 space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-sm text-gray-500">Nama Depan</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded px-4 py-2 text-sm"
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm text-gray-500">Nama Belakang</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded px-4 py-2 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Username</label>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full mt-1 border rounded px-4 py-2 text-sm ${
                  changedFields.username ? "text-orange-500" : ""
                }`}
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-1 border rounded px-4 py-2 text-sm ${
                  changedFields.email ? "text-gray-500" : ""
                }`}
              />
            </div>

            <div className="relative">
              <label className="text-sm text-gray-500">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="********"
                onChange={handleChange}
                className="w-full mt-1 border rounded px-4 py-2 text-sm pr-10"
                style={{ letterSpacing: showPassword ? "normal" : "0.3em" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute mt-3 right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
                tabIndex={-1}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  lineHeight: 1,
                  height: "24px",
                  width: "24px",
                }}
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
              >
                {showPassword ? (
                  // Mata terbuka
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="#222"
                      strokeWidth="2"
                      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#222"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  // Mata tertutup
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 3 12 3 12A21.77 21.77 0 0 1 7.06 7.06"
                      stroke="#222"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1l22 22"
                      stroke="#222"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div ref={refs.birthDate}>
              <label className="text-sm text-gray-500">Tanggal Lahir</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className={`w-full mt-1 border rounded px-4 py-2 text-sm ${
                  changedFields.birthDate ? "text-gray-500" : ""
                }`}
                placeholder="*tambahkan tanggal lahir"
              />
              {!formData.birthDate && (
                <span className="absolute left-4 top-[50%] -translate-y-1/2 text-gray-400 pointer-events-none">
                  *tambahkan tanggal lahir
                </span>
              )}
            </div>

            <div ref={refs.phone}>
              <label className="text-sm text-gray-500">No. Telepon</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full mt-1 border rounded px-4 py-2 text-sm ${
                  changedFields.phone ? "text-orange-500" : ""
                }`}
              />
            </div>

            <div ref={refs.gender} className="relative">
              <label className="text-sm text-gray-500">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full mt-1 border rounded px-4 py-2 text-sm ${
                  changedFields.gender ? "text-gray-500" : ""
                }`}
              >
                <option value="" disabled>
                  *tambahkan gender
                </option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => navigate("/profile")}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className={`px-6 py-2 rounded text-white ${
                  isChanged
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-300 hover:bg-green-600"
                }`}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EditProfile;
