import { motion } from "framer-motion";
import { useState } from "react";

// Sample projects
const projects = [
  {
    title: "Triply: Plan, Book, Travel",
    img: "https://codehaven.io/wp-content/uploads/2024/11/Minimalist-Neutral-Multi-Device-Computer-Mockup-Website-Launch-Instagram-Post7-1024x1024.jpg",
    category: "Travel",
  },
  {
    title: "Plate – Ultimate Restaurant Booking App with Stunning UI/UX",
    img: "https://codehaven.io/wp-content/uploads/2024/11/Minimalist-Neutral-Multi-Device-Computer-Mockup-Website-Launch-Instagram-Post-1024x1024.jpg",
    category: "Restaurant",
  },
  {
    title: "Affine",
    img: "https://codehaven.io/wp-content/uploads/2024/11/Minimalist-Neutral-Multi-Device-Computer-Mockup-Website-Launch-Instagram-Post-6-1024x1024.jpg",
    category: "SaaS",
  },
  {
    title: "Carnesia",
    img: "https://codehaven.io/wp-content/uploads/2024/11/Minimalist-Neutral-Multi-Device-Computer-Mockup-Website-Launch-Instagram-Post-5-1024x1024.jpg",
    category: "E-Commerce",
  },
];

// Extract unique categories from projects
const categories = ["Explore All", ...new Set(projects.map((p) => p.category))];

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("Explore All");

  const filteredProjects =
    selectedCategory === "Explore All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full lg:flex  adnan_container !py-40">
      {/* Sidebar */}
      <aside className="lg:w-64 w-full p-6 text-white rounded-lg shadow-lg flex-shrink-0">
        <ul className="space-y-2 ">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer hover:text-[#C9F31C] transition-all ${
                selectedCategory === cat ? "text-[#C9F31C]" : "text-gray-300"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 items-start">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer group relative bg-[#C9F31C]/10"
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-96 object-cover group-hover:brightness-90 duration-300"
                whileHover={{
                  scale: 1.05,
                  rotate: 3, // slight twist for that elegant drama
                  rotateY: 10, // pseudo 3D effect horizontally
                }}
                transition={{ type: "spring", stiffness: 300 }}
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No projects found for this category.</p>
        )}
      </main>
    </div>
  );
}
