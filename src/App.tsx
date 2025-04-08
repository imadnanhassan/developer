import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Hi, I’m <span className="text-pink-500">[Adnan Hassan]</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
        >
          A passionate developer crafting beautiful web experiences.
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full font-semibold shadow-lg hover:bg-pink-700 transition"
        >
          Let’s Connect
        </motion.a>
      </section>
    </>
  );
}

export default App;
