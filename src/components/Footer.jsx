import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5">
      <div className="max-w-full justify-center mx-6 px-4 grid grid-cols-2 md:grid-cols-6 gap-6 text-sm">
        {/* Logo dan deskripsi */}
        <div className="mt-0">
          <img src="/Magnus.png" alt="Magnustek Logo" className="max-64 mb-2" />
          <p className="">Magnustek – Solusi display LED profesional.</p>
        </div>

        {/* LED Display Solutions */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-2">
            LED Display Solutions
          </h4>
          <ul className="space-y-2">
            <li>LED Indoor</li>
            <li>LED Outdoor</li>
            <li>Portable/ Event Series</li>
            <li>LED Banner</li>
          </ul>
        </div>

        {/* Commercial Display */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-2">
            Commercial Display
          </h4>
          <ul className="space-y-1">
            <li>TV Wall/ Commercial Display</li>
            <li>All in One Screen</li>
          </ul>
        </div>

        {/* Collaboration System */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-2">
            Collaboration System
          </h4>
          <ul className="space-y-1">
            <li>Conference System</li>
            <li>Interactive Smartboard</li>
          </ul>
        </div>

        {/* Smart Digital */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-2">Smart Digital</h4>
          <ul className="space-y-1">
            <li>Standing Kiosk</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-orange-500 mb-2">Social Media</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              {/* TikTok */}
              <img src="/tiktok.png" alt="TikTok" className="w-6 h-6" />
              <span>TikTok</span>
            </li>
            <li className="flex items-center gap-2">
              {/* Instagram */}
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-2">
              {/* Tokopedia */}
              <img src="/tokopedia.png" alt="Tokopedia" className="w-6 h-6" />
              <span>Tokopedia</span>
            </li>
            <li className="flex items-center gap-2">
              {/* WhatsApp */}
              <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
              <span>0812-3456-7890</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social media dan copyright */}
      <div className="flex justify-center items-center max-w-7xl mx-auto px-4 pt-6 mt-6 text-sm">
        <p>© 2025 Magnustek Official</p>
      </div>
    </footer>
  );
};

export default Footer;
