import React from "react";
import { useNavigate } from "react-router-dom";


const categories = [
  {
    id: 1,
    title: "All",
    image: "/All-Logo.png",
    path: "/produk/all",
  },
  {
    id: 2,
    title: "LED Display Solutions",
    image: "/LED-Logo.png",
    path: "/produk/LED",
  },
  {
    id: 3,
    title: "Commercial Display",
    image: "/LED-Logo.png",
    path: "/produk/commercial",
  },
  {
    id: 4,
    title: "Collaboration System",
    image: "/LED-Logo.png",
    path: "/produk/collaboration",
  },
  {
    id: 5,
    title: "Smart Digital",
    image: "/LED-Logo.png",
    path: "/produk/smart",
  },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 border-b-2 border-[#4E2C83] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-black text-start mb-8">
          Lihat Produk Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(category.path)}
              className="text-black rounded-lg p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <h3 className="font-semibold text-sm leading-tight">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
