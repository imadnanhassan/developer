import { motion, Variants } from "framer-motion";

const lineVariants: Variants = {
  animate: {
    x: [-10, 10, -10],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const linePositions: number[] = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];

const AnimatedLines: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      {linePositions.map((pos, index) => (
        <motion.div
          key={index}
          variants={lineVariants}
          animate="animate"
          className={`absolute top-0 h-full w-[1px] bg-white/10`}
          style={{ left: `${pos}%` }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;
