import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import All from "./pages/produk/All";
import LED from "./pages/produk/LED";
import Indoor from "./pages/sub/Indoor";
import Outdoor from "./pages/sub/Outdoor";
import Portable from "./pages/sub/Portable";
import Banner from "./pages/sub/Banner";
import Commercial from "./pages/produk/Commercial";
import TvDisplay from "./pages/sub/TvDisplay";
import AllInOne from "./pages/sub/AllInOne";
import Collaboration from "./pages/produk/Collaboration";
import Interactive from "./pages/sub/Interactive";
import Conference from "./pages/sub/Conference";
import Smart from "./pages/produk/Smart";
import Kiosk from "./pages/sub/Kiosk";

import Detail from "./pages/detail/DetailKiosk";
import BeliKiosk from "./pages/beli/BeliKiosk";
import JanjiKiosk from "./pages/janji/JanjiKiosk";
import BayarKiosk from "./pages/bayar/BayarKiosk";
import StatusKiosk from "./pages/status/StatusKiosk";
import Berhasil from "./pages/berhasil/Berhasil";

import ProfilPerusahaan from "./pages/ProfilPerusahaan";
import Sertifikat from "./pages/Sertifikat";
import PusatBantuan from "./pages/PusatBantuan";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Wishlist from "./pages/Wishlist";
import Keranjang from "./pages/Keranjang";
import Mitra from "./pages/Mitra";
import Portofolio from "./pages/Portofolio";

import Dashboard from "./pages/admin/Dashboard";
import Pesanan from "./pages/admin/Pesanan";
import AdminMitra from "./pages/admin/AdminMitra";
import KelolaProduk from "./pages/admin/KelolaProduk";
import TambahKategori from "./pages/admin/Tambah Kategori";
import JanjiTemu from "./pages/admin/JanjiTemu";

import AdminLayout from "./layouts/AdminLayout";

import "./index.css";
import "leaflet/dist/leaflet.css";

function AppContent() {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAuthPage && !isAdminPage && <Navbar />}

      <Routes>
        {/* User Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/produk/all" element={<All />} />
        <Route path="/produk/LED" element={<LED />} />
        <Route path="/sub/indoor" element={<Indoor />} />
        <Route path="/sub/outdoor" element={<Outdoor />} />
        <Route path="/sub/portable" element={<Portable />} />
        <Route path="/sub/banner" element={<Banner />} />
        <Route path="/produk/commercial" element={<Commercial />} />
        <Route path="/sub/tv-display" element={<TvDisplay />} />
        <Route path="/sub/all-in-one" element={<AllInOne />} />
        <Route path="/produk/collaboration" element={<Collaboration />} />
        <Route path="/sub/conference" element={<Conference />} />
        <Route path="/sub/interactive" element={<Interactive />} />
        <Route path="/produk/smart" element={<Smart />} />
        <Route path="/sub/kiosk" element={<Kiosk />} />
        <Route path="/detail/detail-kiosk" element={<Detail />} />
        <Route path="/beli/beli-kiosk" element={<BeliKiosk />} />
        <Route path="/janji/janji-kiosk" element={<JanjiKiosk />} />
        <Route path="/bayar/bayar-kiosk" element={<BayarKiosk />} />
        <Route path="/status/status-kiosk" element={<StatusKiosk />} />
        <Route path="/berhasil/berhasil-kiosk" element={<Berhasil />} />

        <Route path="/mitra" element={<Mitra />} />
        <Route
          path="/tentang/profil-perusahaan"
          element={<ProfilPerusahaan />}
        />
        <Route path="/tentang/sertifikat" element={<Sertifikat />} />
        <Route path="/tentang/bantuan" element={<PusatBantuan />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/keranjang" element={<Keranjang />} />

        {/* Admin Pages */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/pesanan"
          element={
            <AdminLayout>
              <Pesanan />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/mitra"
          element={
            <AdminLayout>
              <AdminMitra />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/kelola"
          element={
            <AdminLayout>
              <KelolaProduk />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/tambah-kategori"
          element={
            <AdminLayout>
              <TambahKategori />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/janji-temu"
          element={
            <AdminLayout>
              <JanjiTemu />
            </AdminLayout>
          }
        />
      </Routes>

      {!isAuthPage && !isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
