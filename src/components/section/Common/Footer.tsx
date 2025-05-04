import { images } from "@/assets/images/images";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-12 adnan_container justify-between mx-auto pb-16 border-b border-[#1a1a1a]"
      >
        {/* Left: Logo + Description */}
        <motion.div>
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
              <img
                src={images.logo}
                alt="Adnan Hassan"
                className="h-full w-[150px] "
              />
            </Link>
          </motion.div>
          <motion.p className="mt-4 text-zinc-400 text-sm leading-relaxed max-w-sm">
            I’m a passionate web developer with a knack for creating stunning
            and functional websites. My goal is to help businesses succeed
            online through innovative design and development solutions.
          </motion.p>
        </motion.div>

        {/* Center: Links + Email */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Link</h4>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            {["Service", "Projects", "Pricing", "Faqs", "Contact"].map(
              (item, i) => (
                <a key={i} href="#" className="hover:text-[#C9F31C] transition">
                  {item}
                </a>
              )
            )}
          </div>

          {/* Email Subscription */}
          <div className="mt-6 flex items-center border-b border-zinc-600 max-w-xs">
            <Mail className="text-[#C9F31C] mr-2" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-sm placeholder-zinc-400 text-white w-full py-2 focus:outline-none"
            />
          </div>
          <button className="mt-4 bg-[#C9F31C] text-black text-sm font-medium px-5 py-2 rounded hover:brightness-90 transition">
            Sign Up →
          </button>
        </div>

        {/* Right: Address Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Address</h4>
          <div className="space-y-4 text-sm text-zinc-300">
            <p className="flex items-start gap-2">
              <MapPin className="text-[#C9F31C]" size={18} />
              <span>
                55 Main Street, 2nd block,
                <br />
                New York City
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-[#C9F31C]" size={18} />
              hello@adnanhassan.net
            </p>
            <p className="flex items-center gap-2 font-semibold text-white">
              <Phone className="text-[#C9F31C]" size={18} />
              +880 1602 121 038
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="adnan_container mx-auto lg:py-6 py-20 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
        <p className="mb-2 md:mb-0">
          Copyright © {year}, Adnan Hassan All Rights Reserved
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition">
            Linkedin
          </a>
          <a href="#" className="hover:text-white transition">
            Github
          </a>
          <a href="#" className="hover:text-white transition">
            UpWork
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
