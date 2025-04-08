import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface SectionProps {
  id: string;
  color: string;
  onInView: (color: string) => void;
  children: React.ReactNode;
}

const Section = ({ id, color, onInView, children }: SectionProps) => {
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
      className="min-h-screen flex items-center justify-center transition-colors duration-500 z-10 relative"
    >
      {children}
    </section>
  );
};

export default Section;
