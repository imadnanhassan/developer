
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Loader = ({ onComplete }: { onComplete: () => void }) => {
//   const [progress, setProgress] = useState(0);
//   const [loadingComplete, setLoadingComplete] = useState(false);

//   useEffect(() => {
//     if (progress < 100) {
//       const interval = setInterval(() => {
//         setProgress((prev) => Math.min(prev + 1, 100));
//       }, 20);
//       return () => clearInterval(interval);
//     } else {
//       setLoadingComplete(true);
//       setTimeout(() => {
//         onComplete();
//       }, 3000);
//     }
//   }, [progress, onComplete]);

//   return (
//     <div className="fixed inset-0 bg-[#131313] z-[9999] flex items-center justify-center">
//       <AnimatePresence>
//         {!loadingComplete && (
//           <motion.div
//             key="loader-content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 flex flex-col items-center justify-center"
//           >
//             <motion.h1
//               className="text-4xl md:text-6xl font-bold text-white tracking-widest"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               {"Developer".split("").map((char, idx) => (
//                 <motion.span
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   className="inline-block"
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//             </motion.h1>
//             <p className="text-white absolute bottom-4 right-4 text-xl font-semibold">
//               {progress}%
//             </p>
//           </motion.div>
//         )}

//         {loadingComplete && (
//           <>
//             <motion.div
//               className="absolute top-0 left-0 w-1/2 h-full bg-[#131313] z-50"
//               initial={{ x: 0 }}
//               animate={{ x: "-100%" }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             />
//             <motion.div
//               className="absolute top-0 right-0 w-1/2 h-full bg-[#131313] z-50"
//               initial={{ x: 0 }}
//               animate={{ x: "100%" }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             />
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Loader;








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
      const timer = setTimeout(() => setProgress((prev) => prev + 1), 25);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [progress]);

  // Text reveal animation
  useEffect(() => {
    if (developerText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDeveloperText(fullText.slice(0, developerText.length + 1));
      }, 100);
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
          {/* Explosion Panels */}
          <motion.div
            className="absolute inset-0 bg-[#131313] z-10"
            initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
            animate={
              progress >= 100 ? { clipPath: "inset(0% 50% 0% 50%)" } : {}
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          />

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
