import { images } from "@/assets/images/images";
import { mobileNavLinks, navLinks } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Home");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out font-body",
          scrolled
            ? "bg-white/20 backdrop-blur-lg shadow-lg px-4 md:px-28 "
            : "bg-transparent"
        )}
      >
        <div className="max-w-full md:max-w-[1600px] mx-auto px-4 md:px-8 py-3 md:py-5 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link
              to="/"
              className="text-2xl font-bold text-white tracking-wider select-none"
            >
              {/* <span className="text-primary-900">Adnan</span>Hassan */}
              <img src={images.logo} alt="" className="h-full w-[150px] " />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "hidden md:flex justify-center items-center gap-10",
              scrolled
                ? ""
                : "bg-white/20 backdrop-blur-lg rounded-full px-20 py-3"
            )}
          >
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={cn(
                    "text-white text-lg font-medium relative overflow-hidden transition-all duration-300 font-body",
                    "hover:text-[#C9F31C]",
                    "before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-[#C9F31C] before:transition-all before:duration-300 hover:before:w-full"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <Link to={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="ml-4 cursor-pointer px-5 py-2 rounded-full bg-[#C9F31C] hover:bg-[#bde91f] text-black font-semibold text-sm shadow-xl transition"
            >
              Let's Talk
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar with Icons */}
      <div
        className="md:hidden fixed bottom-0 left-0 w-full bg-[#131313] z-50 rounded-t-3xl border-t border-t-white/10 shadow-lg backdrop-blur-md"
        style={{
          background:
            "linear-gradient(to bottom, rgba(201, 243, 28, 0.1), #131313 20%)",
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
    </nav>
  );
};

export default Navbar;

// import { mobileNavLinks, navLinks } from "@/data/navLinks";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [activeLink, setActiveLink] = useState<string>("Home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY && currentScrollY > 10) {
//         // Scrolling down
//         setScrolled(false); // Hide navbar
//       } else if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         setScrolled(true); // Show navbar
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav>
//       <div
//         className={cn(
//           "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
//           scrolled
//             ? "bg-white/20 backdrop-blur-lg shadow-lg px-4 md:px-28 "
//             : "bg-transparent "
//         )}
//       >
//         <div className="max-w-full md:max-w-[1600px] mx-auto px-4 md:px-8 py-3 md:py-5 flex justify-between items-center">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center"
//           >
//             <Link
//               to="/"
//               className="text-2xl font-bold text-white tracking-wider select-none"
//             >
//               <img
//                 src="https://codehaven.io/wp-content/uploads/2024/03/adnan-hassan.png"
//                 alt=""
//                 className="h-full w-[150px] "
//               />
//             </Link>
//           </motion.div>

//           {/* Desktop Menu */}
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className={cn(
//               "hidden md:flex justify-center items-center gap-10",
//               scrolled
//                 ? ""
//                 : "bg-white/20 backdrop-blur-lg rounded-full px-20 py-3"
//             )}
//           >
//             {navLinks.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={item.href}
//                   className={cn(
//                     "text-white text-lg font-medium relative overflow-hidden transition-all duration-300",
//                     "hover:text-[#C9F31C]",
//                     "before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-[#C9F31C] before:transition-all before:duration-300 hover:before:w-full"
//                   )}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </motion.ul>

//           {/* CTA Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="ml-4 px-5 py-2 rounded-full bg-[#C9F31C] hover:bg-[#bde91f] text-black font-semibold text-sm shadow-xl transition"
//           >
//             Let's Talk
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Navbar with Icons */}
//       <div
//         className="md:hidden fixed bottom-0 left-0 w-full bg-[#131313] z-50 rounded-t-3xl border-t border-t-white/10 shadow-lg backdrop-blur-md"
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(201, 243, 28, 0.1), #131313 20%)",
//         }}
//       >
//         <div className="flex justify-center items-center px-10 py-4 gap-6">
//           {mobileNavLinks.map((link) => (
//             <motion.div
//               key={link.name}
//               whileHover={{ scale: 1.1 }}
//               className="text-white flex flex-col items-center gap-1 cursor-pointer relative"
//               onClick={() => setActiveLink(link.name)}
//             >
//               <Link to={link.href}>
//                 {link.name === "Home" ? (
//                   <div className="relative -mt-6">
//                     <div
//                       className="p-3 rounded-xl flex items-center justify-center bg-[#131313] animated-border"
//                       style={{
//                         border: "3px solid transparent",
//                       }}
//                     >
//                       {link.icon}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="p-2">{link.icon}</div>
//                 )}
//               </Link>
//               <span
//                 className={`text-xs uppercase tracking-wider ${
//                   activeLink === link.name ? "text-[#C9F31C]" : "text-white"
//                 }`}
//               >
//                 {link.name}
//               </span>
//               <span
//                 className={`w-6 h-[2px] bg-[#C9F31C] transition-all absolute -bottom-1 ${
//                   activeLink === link.name ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             </motion.div>
//           ))}
//         </div>

//         <style>
//           {`
//                 .animated-border {
//                   position: relative;
//                   z-index: 1;
//                 }

//                 .animated-border::before {
//                   content: '';
//                   position: absolute;
//                   top: -3px;
//                   left: -3px;
//                   right: -3px;
//                   bottom: -3px;
//                   border-radius: 1rem; /* Match the rounded-xl class (16px border-radius) */
//                   background: #C9F31C; /* Solid #C9F31C color */
//                   z-index: -1;
//                   animation: pulse 2s ease-in-out infinite; /* Pulse animation instead of rotate */
//                 }

//                 @keyframes pulse {
//                   0% {
//                     opacity: 0.3;
//                     transform: scale(1);
//                   }
//                   50% {
//                     opacity: 0.8;
//                     transform: scale(1.05);
//                   }
//                   100% {
//                     opacity: 0.3;
//                     transform: scale(1);
//                   }
//                 }
//               `}
//         </style>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
