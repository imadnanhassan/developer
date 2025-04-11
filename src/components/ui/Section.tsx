import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface SectionProps {
  id: string;
  color: string;
  onInView: (color: string) => void;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, color, onInView, children, className }: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) onInView(color);
  }, [inView, color, onInView]);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-colors duration-500 z-10 ${className || ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
