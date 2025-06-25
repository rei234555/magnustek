// components/Sidebar.jsx
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [openProduk, setOpenProduk] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      image: "/dashboard.png",
    },
    { label: "Pesanan", path: "/admin/pesanan", image: "/pesanan.png" },
    { label: "Mitra", path: "/admin/mitra", image: "/mitra.png" },
    {
      label: "Produk",
      path: "#",
      image: "/produk.png",
      children: [
        { label: "Kategori", path: "/admin/tambah-kategori" },
        { label: "Kelola Produk", path: "/admin/kelola" },
      ],
    },
    {
      label: "Janji Temu",
      path: "/admin/janji-temu",
      image: "/janji.png",
    },
  ];

  return (
    <aside className="w-60 h-screen bg-white border border-gray-300 shadow-sm">
      <div className="flex items-center justify-center px-4 py-5">
        <img src="/Magnus.png" alt="MagnusTek" className="w-32" />
      </div>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item, idx) =>
          item.children ? (
            <div key={idx}>
              <button
                onClick={() => setOpenProduk(!openProduk)}
                className={`flex items-center w-full text-left py-2 pl-4 pr-8
                  ${
                    openProduk
                      ? "bg-[#4E2C83] text-white rounded-r-full "
                      : "hover:bg-gray-200 hover:text-black"
                  }
                  rounded-l-none rounded-r-full transition-all`}
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <span className="flex items-center gap-3 flex-1">
                  <img
                    src={item.image}
                    alt={item.label}
                    className={`w-7 h-7 ${
                      openProduk ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span>{item.label}</span>
                </span>
                {openProduk ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </button>
              {openProduk && (
                <div className="mt-1 space-y-1 w-full pr-8 pl-4">
                  {item.children.map((child, i) => {
                    const isActive = location.pathname === child.path;
                    return (
                      <Link
                        key={i}
                        to={child.path}
                        className={`block w-full py-2 text-sm px-0 transition-all rounded-lg
                          ${
                            isActive
                              ? "bg-[#4E2C83] text-white"
                              : "bg-white text-[#4E2C83] border border-[#4E2C83] hover:bg-purple-200"
                          }`}
                      >
                        <span className="ml-6">{child.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center py-2 pl-4 pr-8 rounded-r-full rounded-l-none transition-all ${
                location.pathname === item.path
                  ? "bg-[#4E2C83] text-white rounded-r-full"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              <span className="flex items-center gap-3 flex-1">
                <img
                  src={item.image}
                  alt={item.label}
                  className={`w-7 h-7 ${
                    location.pathname === item.path
                      ? "filter brightness-0 invert"
                      : ""
                  }`}
                />
                <span>{item.label}</span>
              </span>
            </Link>
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
