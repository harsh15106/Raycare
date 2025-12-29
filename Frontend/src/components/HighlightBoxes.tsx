import { motion } from "framer-motion";
import { Heart, Users, Shield, Clock, Stethoscope, Home } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Why Raycare?",
    description: "Unlike generic healthcare, we specialize exclusively in elder care with personalized attention and family involvement.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "3 ElderPod Plans",
    description: "Choose from ₹999, ₹1999, or ₹2999 monthly plans. Each designed for different levels of care needs.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Shield,
    title: "Trusted by Families",
    description: "NRI families across the globe trust us to care for their parents with regular updates and emergency support.",
    color: "bg-accent text-accent-foreground",
  },
];

const services = [
  { icon: Stethoscope, label: "Doctor Visits" },
  { icon: Clock, label: "24×7 Support" },
  { icon: Home, label: "Home Care" },
];

const HighlightBoxes = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            What Makes Us Different
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Elder Care
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-card md:p-8"
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-hero p-6 md:p-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 text-primary-foreground">
                <service.icon className="h-6 w-6" />
                <span className="font-medium">{service.label}</span>
              </div>
            ))}
            <div className="w-full text-center md:w-auto md:text-left">
              <span className="text-lg font-semibold text-primary-foreground">
                Starting at just ₹999/month
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightBoxes;
