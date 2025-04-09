import { motion } from "framer-motion";
import { useState } from "react";

const TooltipWord = ({ word, tooltip }: { word: string; tooltip: string }) => {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative group mx-1 cursor-pointer text-white font-semibold"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {word}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-[#C9F31C] border border-[#C9F31C] bg-black rounded-lg shadow-lg z-10 whitespace-nowrap"
        >
          {tooltip}
        </motion.div>
      )}
    </span>
  );
};
export default TooltipWord;