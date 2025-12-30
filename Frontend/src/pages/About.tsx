import { motion } from "framer-motion";
import { 
  Award, 
  Heart, 
  Target, 
  Clock, 
  Users, 
  Handshake, 
  Phone 
} from "lucide-react";
import QuickInfoBar from "@/components/QuickInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import drRayImage from "@/assets/dr-ray.jpg";

const values = [
    {
        icon: Heart,
        title: "Compassion",
        description: "We treat every elder as our own family member, with patience and genuine care.",
    },
    {
        icon: Target,
        title: "Care",
        description: "Evidence-based medical care tailored to individual health needs and goals.",
    },
    {
        icon: Award,
        title: "Commitment",
        description: "24×7 availability and unwavering dedication to our patients' well-being.",
    },
];

const stats = [
    { value: "15+", label: "Years of Service", icon: Clock },
    { value: "10,000+", label: "Elders Cared", icon: Users },
    { value: "50+", label: "Healthcare Partners", icon: Handshake },
    { value: "24×7", label: "Support Available", icon: Phone },
];

const About = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7]"> {/* Warm off-white background */}
            <QuickInfoBar />
            <Navbar />
            <main>
                {/* Hero */}
                <section className="bg-gradient-warm py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-teal-600">
                                About Us
                            </span>
                            <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
                                Our Story of <span className="text-teal-600">Compassionate Care</span>
                            </h1>
                            <p className="text-lg text-slate-600">
                                Founded with a vision to revolutionize elder care in India, Raycare
                                brings world-class healthcare to your loved ones' doorstep.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Founder Story */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative">
                                    <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-teal-100/50" />
                                    <img
                                        src={drRayImage}
                                        alt="Dr. Debabrata Ray"
                                        className="relative z-10 w-full max-w-md rounded-2xl shadow-lg"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <span className="mb-2 inline-block text-sm font-bold uppercase tracking-wider text-teal-600">
                                    Founder's Story
                                </span>
                                <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
                                    Dr. Debabrata Ray, MD
                                </h2>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        A gold medalist in Medicine, Dr. Ray has dedicated over 15 years to
                                        the field of geriatric care. After witnessing the struggles faced by
                                        elderly patients and their families, he founded Raycare in 2010.
                                    </p>
                                    <p>
                                        His vision was simple yet revolutionary: bring comprehensive healthcare
                                        to elders at home, keeping families informed and involved, whether they
                                        live next door or across the ocean.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section - Matched to Image */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-16 text-center"
                        >
                            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                                OUR PHILOSOPHY
                            </span>
                            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                                Compassion <span className="mx-2 font-light text-slate-300">|</span> Care <span className="mx-2 font-light text-slate-300">|</span> Commitment
                            </h2>
                        </motion.div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group rounded-2xl bg-white p-10 text-center shadow-sm transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 transition-colors group-hover:bg-teal-100">
                                        <value.icon className="h-8 w-8 text-teal-600" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-slate-900">{value.title}</h3>
                                    <p className="leading-relaxed text-slate-500">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats (Kept consistent with new theme) */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-12 text-white shadow-2xl md:px-12 md:py-16">
                            <div className="relative z-10 grid gap-10 text-center md:grid-cols-4 md:gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <p className="mb-1 text-4xl font-bold tracking-tight md:text-5xl">
                                            {stat.value}
                                        </p>
                                        <p className="font-medium text-teal-100">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default About;