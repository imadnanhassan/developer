import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "4+ Years Of Experience",
  "Professional Web Designer",
  "Search Engine Optimizer",
];

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-[#000] text-white lg:py-40 py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-zinc-400 font-medium">Get In Touch</p>
          <h2 className="text-4xl font-semibold mt-2 leading-tight">
            Let’s Talk For your <br />
            <span className="text-[#C9F31C]">Next Projects</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-md">
            I’m always open to discussing product design work or partnership
            opportunities. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>

          <ul className="mt-6 space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-zinc-200">
                <CheckCircle className="text-[#C9F31C]" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Richard D. Hammond"
                type="text"
              />
            </LabelInputContainer>
          </div>

          <div className="flex flex-col">
            <LabelInputContainer>
              <Label htmlFor="email"> Email Address</Label>
              <Input placeholder="support@gmail.com" type="email" />
            </LabelInputContainer>
          </div>

          <div className="flex flex-col">
            <LabelInputContainer>
              <Label htmlFor="phone">Phone Number</Label>
              <Input placeholder="+880 (123) 456 88" type="tel" />
            </LabelInputContainer>
          </div>

          <div className="flex flex-col">
            <LabelInputContainer>
              <Label htmlFor="subject">Subject</Label>
              <Input placeholder="I would like to discuss" type="text" />
            </LabelInputContainer>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Write message"
              className="bg-[#1a1a1a] text-sm text-white px-4 py-3 rounded-md h-32 resize-none placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#C9F31C]"
            />

           
          </div>

          <div className="md:col-span-2">
            <button
              className="group/btn relative block border border-[#C9F31C] cursor-pointer px-6 py-3 rounded-md bg-transparent font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Send Us Message &rarr;
              <BottomGradient />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
