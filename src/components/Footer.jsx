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
              <a
                href="https://www.tiktok.com/@mvgindonesia?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/tiktok.png" alt="Tokopedia" className="w-6 h-6" />
                <span>Tiktok</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/magnustek_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              {/* Tokopedia */}
              <a
                href="https://bnc.lt/a/key_live_abhHgIh1DQiuPxdBNg9EXepdDugwwkHr?channel=salinlink&feature=share&campaign=Shop-265969182-13745048-250625&sdk=web2.63.0&source=web-sdk&data=eyIkb2dfaW1hZ2VfdXJsIjoiaHR0cHM6Ly9pbWFnZXMudG9rb3BlZGlhLm5ldC9pbWcvY2FjaGUvMjE1LXNxdWFyZS9HQW5WUFgvMjAyNC83LzIvYTg4ZTJkZDgtM2VkMC00ZmZiLTgzMWUtNzNhN2U3ZTg2NDRiLmpwZyIsIiRkZXNrdG9wX3VybCI6Imh0dHBzOi8vd3d3LnRva29wZWRpYS5jb20vbWFnbnVzdGVrLW9mZmljaWFsIiwiJGFuZHJvaWRfZGVlcGxpbmtfcGF0aCI6InNob3AvMTM3NDUwNDgiLCIkaW9zX2RlZXBsaW5rX3BhdGgiOiJzaG9wLzEzNzQ1MDQ4IiwiJGFuZHJvaWRfdXJsIjoiaHR0cHM6Ly93d3cudG9rb3BlZGlhLmNvbS9tYWdudXN0ZWstb2ZmaWNpYWwiLCIkaW9zX3VybCI6Imh0dHBzOi8vd3d3LnRva29wZWRpYS5jb20vbWFnbnVzdGVrLW9mZmljaWFsIiwiJGNhbm9uaWNhbF91cmwiOiJodHRwczovL3d3dy50b2tvcGVkaWEuY29tL21hZ251c3Rlay1vZmZpY2lhbD9lbnRyYW5jZV9uYW1lPXNlYXJjaF9zdWdnZXN0aW9uX3N0b3JlJnNvdXJjZT11bml2ZXJzZSZzdD1wcm9kdWN0IiwiJG9nX3RpdGxlIjoiVG9rbyBNYWdudXN0ZWsgT2ZmaWNpYWwgT25saW5lIC0gUHJvZHVrIExlbmdrYXAgJiBIYXJnYSBUZXJiYWlrIHwgVG9rb3BlZGlhIiwiJG9nX2Rlc2NyaXB0aW9uIjoiQmVsaSBwcm9kdWsgTWFnbnVzdGVrIE9mZmljaWFsIG9ubGluZSwgcHJvZHVrIHRlcmxlbmdrYXAgZGFuIGhhcmdhIHRlcmJhaWsuIERhcGF0a2FuIGJlcmJhZ2FpIHByb21vIG1lbmFyaWsuIEJlbGFuamEgYW1hbiBkYW4gbnlhbWFuIGhhbnlhIGRpIFRva29wZWRpYS4iLCIkb2dfdmlkZW8iOm51bGwsIiRvZ190eXBlIjoid2Vic2l0ZSJ9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/tokopedia.png" alt="Tokopedia" className="w-6 h-6" />
                <span>Tokopedia</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6285156949282"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/whatsapp.png" alt="Instagram" className="w-6 h-6" />
                <span>+62-851-5694-9282</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              {/* e-catalouge */}
              <a
                href="https://e-katalog.lkpp.go.id/katalog/produk/detail/64734205?type=general"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src="/katalog.png" alt="katalog" className="w-6 h-6" />
                <span>E-Catalogue</span>
              </a>
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
