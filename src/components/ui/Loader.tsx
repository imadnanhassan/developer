import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [developerText, setDeveloperText] = useState("");

  const fullText = "Developer";

  // Simulate percentage loading
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress((prev) => prev + 1), 25); // Progress increment
      return () => clearTimeout(timer);
    } else {
      // Once progress is 100, hide the loader after 1 second
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Text reveal animation
  useEffect(() => {
    if (developerText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDeveloperText(fullText.slice(0, developerText.length + 1));
      }, 100); // Reveal text one letter at a time
      return () => clearTimeout(timeout);
    }
  }, [developerText]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#131313] text-[#C9F31C] flex items-center justify-center overflow-hidden"
        >
          {/* Developer Text */}
          <div className="z-20 text-4xl md:text-6xl font-bold tracking-widest">
            {developerText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Percentage */}
          <div className="absolute bottom-4 right-6 text-sm font-medium tracking-widest text-white/80 z-30">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
