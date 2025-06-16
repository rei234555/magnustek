import { Bell } from "lucide-react";

const AdminNavbar = () => {
  return (
    <div className="w-full flex justify-end items-center px-6 py-4 border-b bg-white">
      <Bell className="mr-4" />
      <span className="text-[#F46F22] font-semibold">Admin</span>
    </div>
  );
};

export default AdminNavbar;
