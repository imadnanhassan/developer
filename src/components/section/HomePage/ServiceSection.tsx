import { CardSpotlight } from "@/components/ui/card-spotlight";

const services = [
  {
    id: "01",
    title: "Technical SEO & Console Fixes",
    desc: "Beyond keywords I fix what search engines care about.",
  },
  {
    id: "02",
    title: "Website Security & Malware Removal",
    desc: "Your site’s bodyguard against threats.",
  },
  {
    id: "03",
    title: "MERN Stack Development",
    desc: "Modern full-stack web apps, end to end.",
  },
  {
    id: "04",
    title: "API Integration",
    desc: "Connecting systems that speak different languages.",
  },
  {
    id: "05",
    title: "WordPress Development",
    desc: "Flexible, fast, and fully client-ready sites.",
  },
  {
    id: "06",
    title: "Wix & Webflow SEO Optimization",
    desc: "Rank higher on drag-and-drop platforms.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Popular Services
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          My <span className="text-[#C9F31C]">Special Service</span> For your{" "}
          <br className="hidden md:block" />
          Business Development
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <CardSpotlight key={service.id} className="p-6">
            <p className="text-xl font-semibold relative z-20 text-white">
              <span className="text-[#C9F31C] mr-2">{service.id}</span>
              {service.title}
            </p>
            <p className="text-neutral-300 mt-2 relative z-20 text-sm">
              {service.desc}
            </p>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}
