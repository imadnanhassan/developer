import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";

const Testimonials: React.FC = () => {
  return (
    <section className="py-40 px-4 md:px-12 bg-[#000] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Clients Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          I’ve 350+ Clients <br />
          <span className="text-[#C9F31C]">Feedback</span>
        </h2>
      </div>

      <div>
        <TestimonialsCard />
      </div>
    </section>
  );
};

export default Testimonials;
