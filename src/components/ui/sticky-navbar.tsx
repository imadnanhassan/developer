import { mobileNavLinks, navLinks } from "@/data/navLinks";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



const StickyNavbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`sticky top-0 z-50 w-full flex justify-center border-b border-white/10 backdrop-blur-md transition-all ${
          scrolled ? "bg-transparent" : "!bg-[#131313]"
        }`}
      >
        <div className="w-full hidden md:flex adnan_container px-10 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 xl:px-0">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-wider select-none"
          >
            <span className="text-[#C9F31C]">Adnan</span>Hassan
          </Link>

          {/* Menu (only shown after scrolling down) */}
          <nav
            className={`md:flex items-center gap-8 text-white text-sm font-medium transition-all ${scrolled ? "hidden" : ""}`}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link
                  to={link.href}
                  className={`transition duration-200 ${
                    location.pathname === link.href
                      ? "text-[#C9F31C]"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C9F31C] transition-all group-hover:w-full duration-300 ease-in-out"></span>
              </motion.div>
            ))}
          </nav>

          {/* Let's Talk Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 px-5 py-2 rounded-full bg-[#C9F31C] hover:bg-[#bde91f] text-black font-semibold text-sm shadow-xl transition"
          >
            Let's Talk
          </motion.button>
        </div>
      </header>

      {/* Mobile Navbar with Icons */}
      <div
        className="md:hidden fixed bottom-0 left-0 w-full bg-[#131313] z-50 rounded-t-3xl border-t border-t-white/10 shadow-lg backdrop-blur-md"
        style={{
          background:
            "linear-gradient(to bottom, rgba(201, 243, 28, 0.1), #131313 20%)", // Subtle green gradient at the top
        }}
      >
        <div className="flex justify-center items-center px-10 py-4 gap-6">
          {mobileNavLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              className="text-white flex flex-col items-center gap-1 cursor-pointer relative"
              onClick={() => setActiveLink(link.name)}
            >
              <Link to={link.href}>
                {link.name === "Home" ? (
                  <div className="relative -mt-6">
                    <div
                      className="p-3 rounded-xl flex items-center justify-center bg-[#131313] animated-border"
                      style={{
                        border: "3px solid transparent",
                      }}
                    >
                      {link.icon}
                    </div>
                  </div>
                ) : (
                  <div className="p-2">{link.icon}</div>
                )}
              </Link>
              <span
                className={`text-xs uppercase tracking-wider ${
                  activeLink === link.name ? "text-[#C9F31C]" : "text-white"
                }`}
              >
                {link.name}
              </span>
              <span
                className={`w-6 h-[2px] bg-[#C9F31C] transition-all absolute -bottom-1 ${
                  activeLink === link.name ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          ))}
        </div>

        <style>
          {`
          .animated-border {
            position: relative;
            z-index: 1;
          }

          .animated-border::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border-radius: 1rem; /* Match the rounded-xl class (16px border-radius) */
            background: #C9F31C; /* Solid #C9F31C color */
            z-index: -1;
            animation: pulse 2s ease-in-out infinite; /* Pulse animation instead of rotate */
          }

          @keyframes pulse {
            0% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.05);
            }
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
          }
        `}
        </style>
      </div>
    </>
  );
};

export default StickyNavbar;
