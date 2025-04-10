import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Tabs } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle } from "lucide-react";


interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface TabData {
  name: string;
  plans: PricingPlan[];
}

// Pricing Card Component to render each plan
const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <CardSpotlight className="w-full h-full ">
    <div
      className={`relative bg-black rounded-lg p-8 shadow-lg ${
        plan.isPopular ? " border-[#C9F31C]" : ""
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <span className="absolute top-0 right-0 bg-[#C9F31C] text-white text-sm font-semibold px-4 py-1 rounded-bl-lg">
          Popular
        </span>
      )}

      <div className="flex items-center space-x-3">
        <CheckCircle className="h-8 w-8 text-[#C9F31C]" />
        <div>
          <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
          <p className="text-sm text-gray-400">{plan.subtitle}</p>
        </div>
      </div>

      <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-[#C9F31C]" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full cursor-pointer flex items-center justify-center space-x-2 bg-[#C9F31C] text-bkack py-3 rounded-md hover:bg-black hover:text-white hover:border hover:border-[#C9F31C] transition-all ease-in-out duration-300">
        <span>Choose Plan</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  </CardSpotlight>
);

const tabsData: TabData[] = [
  {
    name: "SEO",
    plans: [
      {
        title: "SEO Services",
        subtitle: "(Monthly Subscription) Save 20%",
        price: "$150 /per month",
        features: [
          "SEO Audit & Ongoing Optimization",
          "Keyword Research (up to 15 keywords/month)",
          "On-Page Optimization",
          "Technical SEO Fixes",
          "Performance Analytics & Monthly Report",
        ],
        isPopular: true,
      },
      {
        title: "SEO Pro",
        subtitle: "(Monthly Subscription) Save 25%",
        price: "$300 /per month",
        features: [
          "Advanced SEO Audit & Optimization",
          "Keyword Research (up to 30 keywords/month)",
          "On-Page & Off-Page Optimization",
          "Technical SEO Fixes & Speed Optimization",
          "Detailed Performance Analytics & Weekly Report",
        ],
      },
    ],
  },
  {
    name: "WordPress",
    plans: [
      {
        title: "Basic WordPress",
        subtitle: "(One-Time Payment)",
        price: "$200",
        features: [
          "Custom WordPress Website (up to 5 pages)",
          "Blog Setup",
          "Basic On-Page SEO",
          "1 Month of Support",
          "Free Theme Installation",
        ],
      },
      {
        title: "Combo Package",
        subtitle: "(SEO + WordPress)",
        price: "$250",
        features: [
          "Fully Custom WordPress Website (up to 10 pages)",
          "Ecommerce or Blog Setup",
          "On-Page SEO for the Website",
          "1 Month of SEO Optimization & Reporting",
          "Free 3 Months Maintenance",
        ],
        isPopular: true,
      },
    ],
  },
  {
    name: "MERN",
    plans: [
      {
        title: "MERN Starter",
        subtitle: "(One-Time Payment)",
        price: "$500",
        features: [
          "MERN Stack App (Basic Features)",
          "Up to 5 API Endpoints",
          "Basic Authentication",
          "1 Month of Support",
          "Deployment Assistance",
        ],
      },
      {
        title: "MERN Pro",
        subtitle: "(One-Time Payment)",
        price: "$1000",
        features: [
          "Full MERN Stack App (Advanced Features)",
          "Up to 15 API Endpoints",
          "Advanced Authentication & Authorization",
          "3 Months of Support",
          "Deployment & Scaling Assistance",
        ],
        isPopular: true,
      },
    ],
  },
];

// Map tabsData to the Tab type required by the Tabs component
const pricingTabs = tabsData.map((tab) => ({
  title: tab.name,
  value: tab.name.toLowerCase(),
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tab.plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  ),
}));

const PricingSection: React.FC = () => {
  return (
    <div className="bg-[#0d0d0d] md:h-[120vh] h-[150vh] mx-auto pt-10">
      <div className="adnan_container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Explore My Price</h2>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={pricingTabs}
          containerClassName="mb-12"
          activeTabClassName="bg-[#0d0d0d] border border-[#C9F31C] text-white font-semibold"
          tabClassName="text-white font-semibold"
          contentClassName="w-full"
        />
      </div>
    </div>
  );
};

export default PricingSection;
