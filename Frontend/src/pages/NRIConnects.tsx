import { motion } from "framer-motion";
import { 
  Globe, FileText, Bell, Video, CreditCard, 
  Shield, Clock, Phone, Check, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import QuickInfoBar from "@/components/QuickInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: FileText,
    title: "Weekly Health Reports",
    description: "Comprehensive reports on vitals, medications, doctor visits, and overall health status delivered to your inbox every week.",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    description: "Instant notifications via app, SMS, and call for any health emergencies or concerns that need your attention.",
  },
  {
    icon: Video,
    title: "Video Consultations",
    description: "Join doctor visits virtually, ask questions, and stay connected with your parents' healthcare team.",
  },
  {
    icon: CreditCard,
    title: "Cashless Admission",
    description: "Pre-approved hospital admission at our partner hospitals without any upfront payment hassles.",
  },
  {
    icon: Shield,
    title: "Dedicated Care Manager",
    description: "A single point of contact who knows your parents personally and handles all coordination.",
  },
  {
    icon: Clock,
    title: "24×7 Support",
    description: "Round-the-clock support line staffed by medical professionals who can help in any situation.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Subscribe",
    description: "Choose a plan and provide your parents' details",
  },
  {
    step: "02",
    title: "Assessment",
    description: "Our team visits for an initial health assessment",
  },
  {
    step: "03",
    title: "Care Begins",
    description: "Regular checkups and monitoring starts immediately",
  },
  {
    step: "04",
    title: "Stay Connected",
    description: "Receive reports and updates wherever you are",
  },
];

const NRIConnect = () => {
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">For NRI Families</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Caring for Your Parents,{" "}
                <span className="text-gradient">While You're Abroad</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Distance shouldn't mean disconnection. Stay informed and involved in 
                your parents' healthcare journey, no matter where in the world you are.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="gap-2 bg-gradient-cta hover:opacity-90">
                  Subscribe for Your Parents
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                Features
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Stay Connected, Stay Informed
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 shadow-soft"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
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
                How It Works
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Get Started in 4 Simple Steps
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-gradient-hero p-8 md:p-12"
              >
                <div className="text-center text-primary-foreground">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    NRI Premium Plan
                  </h2>
                  <p className="mb-6 text-primary-foreground/80">
                    Everything in our Elite plan, plus exclusive NRI features
                  </p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold">₹3,999</span>
                    <span className="text-primary-foreground/80">/month</span>
                  </div>
                  
                  <div className="mb-8 grid gap-3 text-left md:grid-cols-2">
                    {[
                      "Weekly video updates",
                      "Monthly detailed reports",
                      "Dedicated NRI helpline",
                      "Cashless hospitalization",
                      "24×7 emergency support",
                      "Medicine management",
                      "Video consultation join",
                      "Care manager access",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    size="lg"
                    className="bg-background text-primary hover:bg-background/90"
                  >
                    Subscribe Now
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NRIConnect;
