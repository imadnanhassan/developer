import { motion } from "framer-motion";
import { useEffect, useState } from "react";


interface CounterProps {
  target: number;
}
const Counter = ({ target }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return <motion.span>{count}</motion.span>;
};
const StatCard = ({
  target,
  label,
  suffix = "",
  delay = 0,
}: {
  target: number;
  label: string;
  suffix?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="bg-[#0f0f0f]/80 border border-lime-400/10 hover:border-lime-400/30 hover:shadow-lg shadow-lime-400/10 transition-all duration-300 rounded-2xl px-8 py-6 w-full sm:w-[250px] text-center space-y-2"
  >
    <p className="text-5xl font-bold text-lime-400 tracking-wide">
      <Counter target={target} />
      {suffix}
    </p>
    <p className="text-sm text-neutral-300">{label}</p>
  </motion.div>
);

const StatsSection = () => {
  return (
    <div className=" flex flex-wrap justify-center lg:justify-end gap-6 mt-10 lg:mt-0 w-full max-w-3xl ">
      <StatCard target={8} label="Years of Experience" suffix="+" delay={0.2} />
      <StatCard target={500} label="Projects Completed" suffix="+" delay={0.4} />
      <StatCard
        target={98}
        label="Client Satisfaction"
        suffix="%"
        delay={0.6}
      />
    </div>
  );
};

export default StatsSection;
