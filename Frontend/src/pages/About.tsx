import { motion } from "framer-motion";
import { Award, Heart, Users, Target } from "lucide-react";
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

const team = [
    { name: "Dr. Debabrata Ray", role: "Founder & Chief Physician", image: drRayImage },
];

const About = () => {
    return (
        <div className="min-h-screen">
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
                            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                                About Us
                            </span>
                            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                                Our Story of <span className="text-gradient">Compassionate Care</span>
                            </h1>
                            <p className="text-lg text-muted-foreground">
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
                                    <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-primary/10" />
                                    <img
                                        src={drRayImage}
                                        alt="Dr. Debabrata Ray - Founder of Raycare"
                                        className="relative z-10 w-full max-w-md rounded-2xl shadow-card"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                                    Founder's Story
                                </span>
                                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                                    Dr. Debabrata Ray, MD
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
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
                                    <p>
                                        Today, Raycare serves thousands of families across Kolkata and Nadia,
                                        with a team of dedicated physicians, nurses, and care managers who
                                        share Dr. Ray's passion for elder care excellence.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="bg-muted/50 py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 text-center"
                        >
                            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                                Our Philosophy
                            </span>
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                Compassion | Care | Commitment
                            </h2>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl bg-card p-8 text-center shadow-soft"
                                >
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="rounded-2xl bg-gradient-hero p-8 md:p-12">
                            <div className="grid gap-8 text-center md:grid-cols-4">
                                {[
                                    { value: "15+", label: "Years of Service" },
                                    { value: "10,000+", label: "Elders Cared" },
                                    { value: "50+", label: "Healthcare Partners" },
                                    { value: "24×7", label: "Support Available" },
                                ].map((stat, index) => (
                                    <div key={index}>
                                        <p className="text-4xl font-bold text-primary-foreground md:text-5xl">
                                            {stat.value}
                                        </p>
                                        <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
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
