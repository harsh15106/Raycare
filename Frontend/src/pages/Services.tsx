import { motion } from "framer-motion";
import { 
  Stethoscope, Home, Phone, FlaskConical, 
  HeartPulse, Brain, Activity, Pill, 
  Video, FileText, Calendar, Clock
} from "lucide-react";
import QuickInfoBar from "@/components/QuickInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";
import CTASection from "@/components/CTASection";

const clinicServices = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive health checkups and ongoing care for all common ailments.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    description: "Specialized care for diabetes, hypertension, heart disease, and more.",
  },
  {
    icon: Home,
    title: "Home Visits",
    description: "Doctor and nurse visits at your doorstep for convenient care.",
  },
  {
    icon: FlaskConical,
    title: "Diagnostics",
    description: "Lab tests with home sample collection and quick results.",
  },
  {
    icon: Video,
    title: "Teleconsultation",
    description: "Video consultations with our specialists from anywhere.",
  },
  {
    icon: Pill,
    title: "Medicine Delivery",
    description: "Prescription medicines delivered to your home with reminders.",
  },
];

const specialPackages = [
  {
    icon: HeartPulse,
    title: "Diabetes Care",
    description: "Complete management including diet, medication, and monitoring.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Brain,
    title: "Stroke Rehabilitation",
    description: "Physiotherapy and recovery programs for stroke survivors.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Activity,
    title: "Dialysis Support",
    description: "Coordination and support for dialysis patients.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Stethoscope,
    title: "Post-Surgery Care",
    description: "Wound care, monitoring, and rehabilitation after surgery.",
    color: "bg-amber-50 text-amber-600",
  },
];

const digitalServices = [
  {
    icon: Calendar,
    title: "Online Booking",
    description: "Book appointments with doctors, choose your slot, and pay online.",
  },
  {
    icon: FileText,
    title: "Digital Records",
    description: "Secure access to all health reports, prescriptions, and vitals history.",
  },
  {
    icon: FlaskConical,
    title: "Lab Tests",
    description: "Book health packages with home collection at discounted rates.",
  },
  {
    icon: Clock,
    title: "24×7 Support",
    description: "Round-the-clock phone and chat support for any health concerns.",
  },
];

const Services = () => {
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
                Our Services
              </span>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                Complete <span className="text-gradient">Healthcare Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From routine checkups to specialized care, we provide comprehensive 
                healthcare services designed specifically for elders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clinic Services */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-teal-600">
                Clinic Services
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Primary Healthcare
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clinicServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-card"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Packages */}
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
                Special Packages
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Condition-Specific Care
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {specialPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 shadow-soft"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${pkg.color}`}>
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Health Hub */}
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
                Digital Health Hub
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Healthcare at Your Fingertips
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {digitalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <PricingPlans />

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
