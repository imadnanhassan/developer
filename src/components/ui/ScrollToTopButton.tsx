"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import lenis from "@/lib/lenis";


export const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    lenis.scrollTo(0);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 p-3 bg-[#C9F31C] text-black rounded-full shadow-lg hover:scale-110 transition-all"
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
