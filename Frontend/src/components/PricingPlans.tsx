import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "999",
    description: "Essential care for independent elders",
    features: [
      "Monthly health checkup",
      "24×7 phone support",
      "Medicine reminders",
      "Emergency coordination",
      "Digital health records",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "1999",
    description: "Comprehensive care for regular attention",
    features: [
      "Bi-weekly doctor visits",
      "24×7 priority support",
      "Medicine delivery",
      "Lab test coordination",
      "Weekly family reports",
      "Specialist referrals",
      "Diet consultation",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "2999",
    description: "Complete care for high-dependency elders",
    features: [
      "Weekly doctor home visits",
      "Dedicated care manager",
      "All lab tests included",
      "Daily check-in calls",
      "Hospital admission support",
      "Physiotherapy sessions",
      "24×7 nurse on call",
      "Family video updates",
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-20">
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
            ElderPod Plans
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Choose the Right Care Plan
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Flexible subscription plans designed for different care needs. 
            All plans include 24×7 emergency support and digital health records.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-card md:p-8 ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    <Star className="h-3 w-3" fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="mb-2 text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-cta hover:opacity-90"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                Subscribe Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
